
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyC6cH426rQhzVyEuD9KvdLJMmBW9Xozr8Q",
  authDomain: "banking-real-system-111.firebaseapp.com",
  projectId: "banking-real-system-111",
  storageBucket: "banking-real-system-111.appspot.com",
  messagingSenderId: "31291144651",
  appId: "1:31291144651:web:dd85f50b14fa18012d1e4e"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };
