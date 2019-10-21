import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyC6ae1f5Ja0mL8kwRR34H9S8H5EUxIRswk",
  authDomain: "album-a01d3.firebaseapp.com",
  databaseURL: "https://album-a01d3.firebaseio.com",
  projectId: "album-a01d3",
  storageBucket: "album-a01d3.appspot.com",
  messagingSenderId: "730410207280",
  appId: "1:730410207280:web:b96f8050f7c732262f45f5"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
