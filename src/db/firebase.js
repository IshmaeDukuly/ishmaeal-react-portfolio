import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore/lite"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwCxnt0UvYFM0zcH7eTmbeYURdcoF6pAI",
  authDomain: "americ-portfolio.firebaseapp.com",
  projectId: "americ-portfolio",
  storageBucket: "americ-portfolio.appspot.com",
  messagingSenderId: "8095122184",
  appId: "1:8095122184:web:6700993d65ab1051ed22bd",
  measurementId: "G-5K36BJT8NC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const FireBaseDB = getFirestore(app)