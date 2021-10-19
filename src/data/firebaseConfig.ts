import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/database';

const stageFirebaseConfig = {
  apiKey: 'AIzaSyDCdMVct6sQsR9oaM-7o_PYiIFYGVq3FLQ',
  authDomain: 'pastel-dev-4a234.firebaseapp.com',
  databaseURL: 'https://pastel-dev-4a234.firebaseio.com',
  projectId: 'pastel-dev-4a234',
  storageBucket: 'pastel-dev-4a234.appspot.com',
  messagingSenderId: '1017293414343',
  appId: '1:1017293414343:web:d5b1c3fdc54f3f0d'
};
const prodFirebaseConfig = {
  apiKey: 'AIzaSyD4bZXa_AJqkWWebCvkwsMFZam5ziDLvAs',
  authDomain: 'pastel-prod.firebaseapp.com',
  databaseURL: 'https://pastel-prod.firebaseio.com',
  projectId: 'pastel-prod',
  storageBucket: 'pastel-prod.appspot.com',
  messagingSenderId: '532368822845',
  appId: '1:532368822845:web:9afe35fcb13a35cc'
};

const firebaseConfig =
  process.env.NODE_ENV === 'production'
    ? prodFirebaseConfig
    : stageFirebaseConfig;
// Initialize Firebase instance
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
