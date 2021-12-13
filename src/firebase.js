// Import the functions you need from the SDKs you need
import React,{useState,useEffect,useContext} from "react";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from  "@firebase/firestore"
import { AlbumContext } from "./context/AlbumContext";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqYHd3Dnw4xvp0DGjDtewqSz6GRjypleU",
  authDomain: "music-app-cda26.firebaseapp.com",
  projectId: "music-app-cda26",
  storageBucket: "music-app-cda26.appspot.com",
  messagingSenderId: "416477647637",
  appId: "1:416477647637:web:c63bf11a3f4236be318f1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);
export function signup(email, password){
  return  createUserWithEmailAndPassword(auth, email, password)
}
export function login(email, password){
    return  signInWithEmailAndPassword(auth, email, password)
  }
