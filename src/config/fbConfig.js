import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
  apiKey: "AIzaSyDyD2cIh4EyaCxFyb3rE0D74LQn_XDcAPo",
  authDomain: "react-redux-plan.firebaseapp.com",
  databaseURL: "https://react-redux-plan.firebaseio.com",
  projectId: "react-redux-plan",
  storageBucket: "react-redux-plan.appspot.com",
  messagingSenderId: "809193106290"
};
firebase.initializeApp(config);

firebase.firestore().settings({
  timestampsInSnapshots: true
});

export default firebase;