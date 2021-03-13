import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhvLqMyrAVvemw9SJ5HKtrS1Rk67olofg",
  authDomain: "ecommerce-app-e9e30.firebaseapp.com",
  projectId: "ecommerce-app-e9e30",
  storageBucket: "ecommerce-app-e9e30.appspot.com",
  messagingSenderId: "862736347430",
  appId: "1:862736347430:web:9edeb8d82d1adc6d2191e7",
  measurementId: "G-Q2G5JP3728",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
