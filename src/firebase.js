import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyCsHl0QXyMAMUgLM3ySKSEYfJl3VW8hL_0",
    authDomain: "vue-quiz-c22e4.firebaseapp.com",
    databaseURL: "https://vue-quiz-c22e4.firebaseio.com",
    projectId: "vue-quiz-c22e4",
    storageBucket: "vue-quiz-c22e4.appspot.com",
    messagingSenderId: "747915147196"
});

export default firebase;