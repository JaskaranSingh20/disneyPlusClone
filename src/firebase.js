import { initializeApp} from "firebase/app";
import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAiR8KZc1NqjdHIxvJQsTftrSzRSmN7Ojw",
  authDomain: "disney-clone-56f6f.firebaseapp.com",
  projectId: "disney-clone-56f6f",
  storageBucket: "disney-clone-56f6f.appspot.com",
  messagingSenderId: "776917095719",
  appId: "1:776917095719:web:f9396de3c12970c0600502"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const storage = getStorage(firebaseApp);

export {auth, provider, storage};

export default db;
