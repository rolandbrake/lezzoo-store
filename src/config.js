import firebase from "firebase/app";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyA8NTOQLGIqF8lfCw91vq7IVAXFpnxVPgo",
  authDomain: "lezzoo-store.firebaseapp.com",
  projectId: "lezzoo-store",
  storageBucket: "lezzoo-store.appspot.com",
  messagingSenderId: "467818582137",
  appId: "1:467818582137:web:2c94258f8cc84cd53304a8",
  measurementId: "G-V4WVWXFGF6",
});

// Get a reference to the storage service, export it for use
export const storage = firebase.storage();

export default app;
