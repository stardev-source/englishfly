import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBTOxgbtfURxL8f-f8D44hSZLjeAq07ooM',
  authDomain: 'englishfly-2a11c.firebaseapp.com',
  projectId: 'englishfly-2a11c',
  storageBucket: 'englishfly-2a11c.firebasestorage.app',
  messagingSenderId: '750555257301',
  appId: '1:750555257301:web:405c6b7c45c813f5eec55c',
  measurementId: 'G-E7NZXGYCJF',
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
