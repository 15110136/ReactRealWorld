import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';


export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'


const API_ROOT = 'https://conduit.productionready.io/api';

export const signIn = (credentials) => dispatch => {
  // console.log(credentials);

  axios.post(`${API_ROOT}/users/login`, credentials)
    .then(res => {
      const {
        token
      } = res.data.user;
      localStorage.setItem('token', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      // console.log(decoded);
      dispatch({
        type: SET_CURRENT_USER,
        payload: decoded
      });
    })
    .catch(err => {
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data
      });
    });
}

// export const signIn = (credentials) => {
//   return (dispatch, getState, {
//     getFirebase
//   }) => {
//     const firebase = getFirebase();
//     firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then(() => {
//         dispatch({
//           type: 'LOGIN_SUCCESS'
//         });
//       })
//       .catch((err) => {
//         dispatch({
//           type: 'LOGIN_ERROR',
//           err
//         });
//       })
//   }
// }

export const signOut = () => {
  return (dispatch, getState, {
    getFirebase
  }) => {
    const firebase = getFirebase();
    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'SIGNOUT_SUCCESS'
      })
    });
  }
}

export const signUp = user => dispatch => {
  // console.log(user);

  axios.post(`${API_ROOT}/users`, user)
    .then(res => {
      console.log(res.data);
      dispatch({
        type: SIGN_UP_SUCCESS,
        payload: res.data
      })
    })
    .catch(err => {
      console.log(err.response.data.errors);
      dispatch({
        type: SIGN_UP_ERROR,
        payload: err.response.data.errors
      });
    });
}

// export const signUp = (newUser) => {
//   return (dispatch, getState, {
//     getFirebase,
//     getFirestore
//   }) => {
//     const firebase = getFirebase();
//     const firestore = getFirestore();

//     firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password)
//       .then((res) => {
//         return firestore.collection('users').doc(res.user.uid).set({
//           firstName: newUser.firstName,
//           lastName: newUser.lastName,
//           initials: newUser.firstName[0] + newUser.lastName[0]
//         });
//       }).then(() => {
//         dispatch({
//           type: 'SIGNUP_SUCCESS'
//         })
//       }).catch(err => {
//         dispatch({
//           type: 'SIGNUP_ERROR',
//           err
//         });
//       });
//   }
// }