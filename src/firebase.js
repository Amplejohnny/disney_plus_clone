//Firebase App (the core Firebase SDK) configuration

import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
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


export { auth, provider, storage, db };
export default firebaseApp;

// const addMoviesToFirestore = async (moviesData) => {
//   try {
//     // Loop through each movie and add it to Firestore
//     for (const movie of moviesData) {
//       // Add the movie to Firestore
//       await addDoc(collection(db, "movies"), movie);
//     }
//     console.log("Movies data added to Firestore successfully!");
//   } catch (error) {
//     console.error("Error adding movies data to Firestore: ", error);
//   }
// };

// // Call the function to add movies data to Firestore
// const moviesData = [
//   // Paste the provided movies data here
// ];
// addMoviesToFirestore(moviesData);
