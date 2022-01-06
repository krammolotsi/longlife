// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCkltzXAD0ZBHRINAlB4aMs67Ze9nhGwbg',
  authDomain: 'longlife-590c3.firebaseapp.com',
  projectId: 'longlife-590c3',
  storageBucket: 'longlife-590c3.appspot.com',
  messagingSenderId: '987187651015',
  appId: '1:987187651015:web:5432f02a949e149cdbb9e2',
  measurementId: 'G-3QL1KPJF3T',
};

// Initialize Firebase
const app = !getApp().length ? initializeApp(firebaseConfig) : getApp();
const analytics = getAnalytics(app);
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
