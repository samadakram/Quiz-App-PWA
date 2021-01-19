import firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyBndVMzNK-RClPQWa04UhAbt3ArWDgkajI",
    authDomain: "quiz-app-samad.firebaseapp.com",
    projectId: "quiz-app-samad",
    storageBucket: "quiz-app-samad.appspot.com",
    messagingSenderId: "443814049408",
    appId: "1:443814049408:web:1275523743f145feaad865"
};

firebase.initializeApp(config);

export default firebase;