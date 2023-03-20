import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
import {
  getStorage,
} from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSKxrbvT5FM0eRtE0QmTkWcTELEmj9Kns",
  authDomain: "comision-39560-9e437.firebaseapp.com",
  projectId: "comision-39560-9e437",
  storageBucket: "comision-39560-9e437.appspot.com",
  messagingSenderId: "449349041011",
  appId: "1:449349041011:web:f9625119820ce6eb93a306",
  measurementId: "G-CLZNV1MLQ8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const storage = getStorage();

export async function obtenerProductos() {
  const productos = [];
  try {
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
      productos.push({ ...doc.data(), id: doc.id });
    });
    return productos;
  } catch (error) {
    console.log(error);
  }
}
