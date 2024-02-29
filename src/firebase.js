// firebase.js

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAeZu74AXSi-z0b9xj7gCeheAfwyn3phhw",
  authDomain: "disney-plus-clone-f2b8b.firebaseapp.com",
  projectId: "disney-plus-clone-f2b8b",
  storageBucket: "disney-plus-clone-f2b8b.appspot.com",
  messagingSenderId: "749951693062",
  appId: "1:749951693062:web:77af26338d041e8f16ee87",
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

//Detect auth state change
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    console.log("User is signed in");
    const uid = user.uid;
  } else {
    // User is signed out
    console.log("User is signed out");
  }
});

export { auth, provider, storage, db };
export default firebaseApp;
