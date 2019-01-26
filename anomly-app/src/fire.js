import firebase from 'firebase'
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyAvUrk8AMbFejuKQ30ck9P1E6lKZJzMIP8",
  authDomain: "anomly-f6630.firebaseapp.com",
  databaseURL: "https://anomly-f6630.firebaseio.com",
  projectId: "anomly-f6630",
  storageBucket: "anomly-f6630.appspot.com",
  messagingSenderId: "304694326629"
};
var fire = firebase.initializeApp(config);
export default fire;
