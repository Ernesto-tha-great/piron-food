import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAQIduvHwL-QnFbitshz2mKdwvue3TUIjU",
    authDomain: "piron-food.firebaseapp.com",
    projectId: "piron-food",
    storageBucket: "piron-food.appspot.com",
    messagingSenderId: "344269705724",
    appId: "1:344269705724:web:5dcde0866cc389152ae279"
  };

  !firebase.apps.length? firebase.initializeApp(firebaseConfig) : firebase.app()

  export default firebase;