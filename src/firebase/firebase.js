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
  apiKey: "AIzaSyAbHuAAIAKnzC3BGr_6X3etKrbq8Bki7IY",
  authDomain: "diego-9742b.firebaseapp.com",
  projectId: "diego-9742b",
  storageBucket: "diego-9742b.appspot.com",
  messagingSenderId: "476086267001",
  appId: "1:476086267001:web:28350445ee14b92f9c38a8",
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
