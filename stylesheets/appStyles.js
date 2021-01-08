import { StyleSheet } from 'react-native';
import { lightBlueColor, blueColor } from '../src/constants/AppConstants.js'

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
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    height: '50%',
    width: '90%',
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  card: {
    backgroundColor: 'pink',
  },
  cardText: {
    color: blueColor
  },
  button: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10
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
});