import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyBdUmccGRoP3KV9XPUxJzbh_kSRuv9k4Wc",
  authDomain: "clone-disney-653da.firebaseapp.com",
  projectId: "clone-disney-653da",
  storageBucket: "clone-disney-653da.appspot.com",
  messagingSenderId: "303339632372",
  appId: "1:303339632372:web:96f81eafcc413e3f1a10a1",
  measurementId: "G-E7KKGPX7GD"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const storage = getStorage();

export { auth, provider, storage };
export default db;
