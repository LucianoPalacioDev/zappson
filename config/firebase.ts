import { FirebaseApp, getApps, initializeApp } from "firebase/app";
import {
  Firestore,
  getFirestore,
  initializeFirestore,
} from "firebase/firestore";
import { getFirebaseConfig } from "./index";

const firebaseConfig = getFirebaseConfig();

let firebaseApp: FirebaseApp;
let db: Firestore;

try {
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
    initializeFirestore(firebaseApp, {});
  } else {
    firebaseApp = getApps()[0];
  }

  db = getFirestore(firebaseApp);
} catch (error) {
  console.error("Error initializing Firebase:", error);
  throw new Error(
    "Error initializing Firebase. Please check your configuration."
  );
}

export { db };
export default firebaseApp;
