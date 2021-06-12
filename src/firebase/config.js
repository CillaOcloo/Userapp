import firebase from 'firebase' 

const firebaseConfig = {
    apiKey: "AIzaSyAarn1sIRKEpLvBXrSehLaQwduHChn6ZiY",
    authDomain: "userappfb.firebaseapp.com",
    projectId: "userappfb",
    storageBucket: "userappfb.appspot.com",
    messagingSenderId: "52116132820",
    appId: "1:52116132820:web:411b3b8fc6e3ef1c93bc41"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase;