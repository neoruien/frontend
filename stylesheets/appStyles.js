import { StyleSheet } from 'react-native';
import { lightBlueColor, blueColor } from '../constants/AppConstants.js'

/** Stylesheet for App.js */
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: blueColor,
    justifyContent: "center",
    alignItems: "center"
  },
  pageContainerTitle: {
    color: blueColor,
    fontWeight: "bold",
    fontSize: 20,
    borderBottomColor: lightBlueColor,
    borderBottomWidth: 5,
    paddingBottom: 5
  },
  pageContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: '80%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  shortPageContainer: {
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: '40%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  topContainer: {
    position: "absolute",
    top: 0,
    height: '20%',
    width: '90%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tallTopContainer: {
    position: "absolute",
    top: 0,
    height: '60%',
    width: '90%',
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  formContainer: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 20,
    height: '50%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  formText: {
    color: blueColor,
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5
  },
  card: {
    marginVertical: 10,
    flexDirection: "row"
  },
  cardText: {
    color: blueColor,
    fontSize: 22
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
  },
  buttonBorder: {
    borderColor: blueColor,
    borderWidth: 3,
    marginTop: 20,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    alignSelf: "center"
  },
  buttonText: {
    color: blueColor,
    fontSize: 20,
    fontWeight: "bold"
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  image: {
    height: 50,
    width: 50,
    marginRight: 10
  },
  bigimage: {
    height: 300,
    width: 300,
    alignSelf: "center"
  }
});