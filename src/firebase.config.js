import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDoc, getDocs, getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyDBNMZ_qQzPgCxA_x1RU2GGF1e7jYgfBXA",
    authDomain: "to-do-list-odin-eec49.firebaseapp.com",
    projectId: "to-do-list-odin-eec49",
    storageBucket: "to-do-list-odin-eec49.appspot.com",
    messagingSenderId: "476172820439",
    appId: "1:476172820439:web:655f8d0892493e33317592",
};
// initializeApp(config);
// const firebaseAppConfig = getFirebaseConfig(config);
// const app = initializeApp(firebaseAppConfig);

// const auth = getAuth(app)
// const db = getFirestore(app)

// const toDosRef = collection(db, 'toDos')
// const snapshot = await getDocs(toDosRef)

//detect auth state
// auth.onAuthStateChanged(user => {

// })

// onAuthStateChanged(auth, user => {
//  if(user !== null) {
//   console.log('logged in!');
//  } else {
//   console.log('No user!')
//  }
// })
export { config };
