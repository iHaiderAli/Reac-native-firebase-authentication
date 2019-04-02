import Firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyDaeEvHpJXhLRfMos0WLVD_OpvtSWA0KeE",
    authDomain: "myapplication-e3f24.firebaseapp.com",
    databaseURL: "https://myapplication-e3f24.firebaseio.com",
    projectId: "myapplication-e3f24",
    storageBucket: "",
    messagingSenderId: "892170186986"
  };
let app = Firebase.initializeApp(config);
export const db = app.database();