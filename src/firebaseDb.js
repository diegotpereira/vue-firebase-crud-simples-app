import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyBn5PLpzZj753IigDKAWhhYs9tKoNKepdc",
    authDomain: "projetos-vue.firebaseapp.com",
    projectId: "projetos-vue",
    storageBucket: "projetos-vue.appspot.com",
    messagingSenderId: "1010152483590",
    appId: "1:1010152483590:web:57a7c3fc8879b94feb4c87",
    measurementId: "G-YV1KBE152F"
}
const firebaseApp = firebase.initializeApp(config)

export const db = firebaseApp.firestore()