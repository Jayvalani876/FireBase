import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCUedcXDbwhdg7YLfEVr7KaeGN0P2TC-WM",
    authDomain: "login-auth-2958f.firebaseapp.com",
    projectId: "login-auth-2958f",
    storageBucket: "login-auth-2958f.appspot.com",
    messagingSenderId: "6185805091",
    appId: "1:6185805091:web:09251e59cf1f1f832a5896",
    measurementId: "G-W3WM1CF0HX"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;
