import firebase from 'firebase'; 

const firebaseConfig = {
  apiKey: "AIzaSyA8R3sHfK-BjJbzviXEiIYQ2Ys6RMYmJYU",
  authDomain: "story-telling-app-45de6.firebaseapp.com",
  databaseURL: "https://story-telling-app-45de6-default-rtdb.firebaseio.com",
  projectId: "story-telling-app-45de6",
  storageBucket: "story-telling-app-45de6.appspot.com",
  messagingSenderId: "752714298254",
  appId: "1:752714298254:web:d1c1cfe429a7f0ed0beadf"
};

firebase.initializeApp(firebaseConfig); 

export default firebase.database();