import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Camera } from "expo-camera";
import { Video } from "expo-av";
import { blueColor } from "../../constants/AppConstants.js";
import * as FileSystem from 'expo-file-system';
import react from "react";

const WINDOW_HEIGHT = Dimensions.get("window").height;
const captureSize = Math.floor(WINDOW_HEIGHT * 0.09);

class Singleton {
  static myInstance = null;

  _imageUri = "";
    static getInstance() {
        if (Singleton.myInstance == null) {
            Singleton.myInstance = new Singleton();
        }

        return this.myInstance;
    }

    getImageUri() {
        return this._imageUri;
    }

    setImageUri(id) {
        this._imageUri = id;
    }
}

let singleton = Singleton.getInstance();

export default function App({navigation}) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(Camera.Constants.Type.back);
  const [isPreview, setIsPreview] = useState(false);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [isVideoRecording, setIsVideoRecording] = useState(false);
  const [videoSource, setVideoSource] = useState(null);
  const cameraRef = useRef();

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true, skipProcessing: true };
      const data = await cameraRef.current.takePictureAsync(options);
      const source = data.uri;
      if (source) {
        await cameraRef.current.pausePreview();
        setIsPreview(true);
        singleton.setImageUri(source);
      }
    }
  };

  const base64 = async () => {
    return await FileSystem.readAsStringAsync(singleton.getImageUri(), { encoding: 'base64' });
  }

  const switchCamera = () => {
    if (isPreview) {
      return;
    }
    setCameraType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const cancelPreview = async () => {
    await cameraRef.current.resumePreview();
    setIsPreview(false);
    setVideoSource(null);
  };

  const renderCancelPreviewButton = () => (
    <TouchableOpacity onPress={cancelPreview} style={styles.button}>
        <Text style={styles.buttonText}>Retake</Text>
    </TouchableOpacity>
  )
  
  const send = (json, method) => { 
    return fetch('http://192.168.43.32:12345/frontend', {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Content-Length': 105,
      },
      body: json
    })
  }

  const sendImg = (img) => {
    base64().then(str => { console.log(str); return JSON.stringify({ type: 1, image: str }) }).then(json => send(json, 'POST'))
  }

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.replace('Confirm add an item');
          sendImg(singleton.getImageUri());
        }} style={styles.button}>
        <Text style={styles.buttonText}>Done</Text>
      </TouchableOpacity>
    )
  }

  const renderVideoPlayer = () => (
    <Video
      source={{ uri: videoSource }}
      shouldPlay={true}
      style={styles.media}
    />
  );

  const renderVideoRecordIndicator = () => (
    <View style={styles.recordIndicatorContainer}>
      <View style={styles.recordDot} />
      <Text style={styles.recordTitle}>{"Recording..."}</Text>
    </View>
  );

  const renderCaptureControl = () => (
    <View style={styles.control}>
      <TouchableOpacity disabled={!isCameraReady} onPress={switchCamera}>
        <Text style={styles.text}>{"Flip"}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={!isCameraReady}
        onPress={takePicture}
        style={styles.capture}
      />
    </View>
  );

  if (hasPermission === null) {
    return <View />;
  }

  if (hasPermission === false) {
    return <Text style={styles.text}>No access to camera</Text>;
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cameraContainer}>
        <Camera
          ref={cameraRef}
          style={styles.cameraContainer}
          type={cameraType}
          onCameraReady={onCameraReady}
          onMountError={(error) => {
            console.log("camera error", error);
          }}
        />
      </View>
      <View style={styles.utilityContainer}>
        {isVideoRecording && renderVideoRecordIndicator()}
        {videoSource && renderVideoPlayer()}
        {!videoSource && !isPreview && renderCaptureControl()}
        {isPreview && renderCancelPreviewButton()}
        {isPreview && renderDoneButton()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: blueColor,
    justifyContent: "center",
    alignItems: "center"
  },
  cameraContainer: {
    width: 300,
    height: 400,
    alignSelf: "center",
    marginBottom: 20
  },
  utilityContainer: {
    width: '90%',
    height: 100
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "center",
    margin: 5
  },
  buttonText: {
    color: blueColor,
    fontSize: 20,
    fontWeight: "bold"
  },
  media: {
    ...StyleSheet.absoluteFillObject,
  },
  control: {
    position: "absolute",
    flexDirection: "row",
    bottom: 38,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  capture: {
    backgroundColor: "#f5f6f5",
    borderRadius: 5,
    height: captureSize,
    width: captureSize,
    borderRadius: Math.floor(captureSize / 2),
    marginHorizontal: 31,
  },
  recordIndicatorContainer: {
    flexDirection: "row",
    position: "absolute",
    top: 25,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    opacity: 0.7,
  },
  recordTitle: {
    fontSize: 14,
    color: "#ffffff",
    textAlign: "center",
  },
  recordDot: {
    borderRadius: 3,
    height: 6,
    width: 6,
    backgroundColor: "#ff0000",
    marginHorizontal: 5,
  },
  text: {
    color: "#fff",
    fontSize: 18
  },
});