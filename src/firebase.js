import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyC-uvnS8-1Bt-PtG2GBUw7i87U77y8yRAg",
  authDomain: "tareas-app-2d94c.firebaseapp.com",
  projectId: "tareas-app-2d94c",
  storageBucket: "tareas-app-2d94c.appspot.com",
  messagingSenderId: "942240662258",
  appId: "1:942240662258:web:89ff48b08b756cb15e066b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)

export const auth = getAuth(app);
export { storage }
export { db };
