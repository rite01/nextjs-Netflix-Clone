
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyDPs-FOed8ukkQKJlNRMfq7WariWwIMyz0",
    authDomain: "netfilx-42a07.firebaseapp.com",
    projectId: "netfilx-42a07",
    storageBucket: "netfilx-42a07.appspot.com",
    messagingSenderId: "513913932361",
    appId: "1:513913932361:web:6b4ca9724b782ac294cd98",
    measurementId: "G-R31X359H2G"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }
