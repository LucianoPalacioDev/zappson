import firebaseConfig from "./firebase.config.json";

export interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
}

export const getFirebaseConfig = (): FirebaseConfig => {
  return firebaseConfig as FirebaseConfig;
};

export default getFirebaseConfig();
