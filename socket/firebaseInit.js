import firebase from "firebase";
import "firebase/firestore";
import { config } from "./firebaseConfig";
const firebaseApp = firebase.initializeApp(config);
const db = firebaseApp.firestore();
export default db;
