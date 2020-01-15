import firebase from "firebase/app";
import "firebase/firestore";

// Get a Firestore instance
const db = firebase
  .initializeApp({
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "stanley-masinde",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""
  })
  .firestore();

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore;
export { Timestamp, GeoPoint };

export default db;
