import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyAE-A62neuu272fA7MY7VWgxUctzNIURwE',
  authDomain: 'product-management-6d658.firebaseapp.com',
  projectId: 'product-management-6d658',
  storageBucket: 'product-management-6d658.appspot.com',
  messagingSenderId: '653275623932',
  appId: '1:653275623932:web:1aedb847f212df211e4279',
  measurementId: 'G-LCRFPLE45M',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();

export { projectStorage };
