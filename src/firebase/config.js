import * as firebase from 'firebase/app'
// file storage
import 'firebase/storage'
// database
import 'firebase/firestore'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAzofFadz4DYEQO99gCRbKSVAkCdDIKSEs",
    authDomain: "firegram-bb6f7.firebaseapp.com",
    databaseURL: "https://firegram-bb6f7.firebaseio.com",
    projectId: "firegram-bb6f7",
    storageBucket: "firegram-bb6f7.appspot.com",
    messagingSenderId: "781170915982",
    appId: "1:781170915982:web:62822f484678083d1227df"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage()
  const projectFirestore = firebase.firestore()
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp } 