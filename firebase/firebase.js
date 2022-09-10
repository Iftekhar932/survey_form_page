const firebaseConfig = {
  apiKey: "AIzaSyCRpubfKpUDCNXYh5FI1Smhoury6EyahqE",
  authDomain: "survey-9755b.firebaseapp.com",
  databaseURL: "https://survey-9755b-default-rtdb.firebaseio.com",
  projectId: "survey-9755b",
  storageBucket: "survey-9755b.appspot.com",
  messagingSenderId: "72539392202",
  appId: "1:72539392202:web:860fcfd96f1c6f97b3cc33",
};

// initialize firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
