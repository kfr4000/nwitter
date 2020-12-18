import * as firebase from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCweAh3aWDlVFXg6v17AWkOsMsMzrQ_iLY",
    authDomain: "nwitter-32d0d.firebaseapp.com",
    projectId: "nwitter-32d0d",
    storageBucket: "nwitter-32d0d.appspot.com",
    messagingSenderId: "228422028917",
    appId: "1:228422028917:web:bb39a8ef870eecd0fdb23c"
    }
};

export default firebase.initializeApp(firebaseConfig);