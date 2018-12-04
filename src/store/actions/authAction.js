import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';


export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SIGN_UP_ERROR = 'SIGN_UP_ERROR'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'


const API_ROOT = 'https://conduit.productionready.io/api';

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

export const signIn = (credentials) => dispatch => {
  axios.post(`${API_ROOT}/users/login`, credentials)
    .then(res => {
      const {
        token
      } = res.data.user;
      localStorage.setItem('token', token);
      setAuthToken(token);
      const decoded = jwt_decode(token);
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => {      
      dispatch({
        type: LOGIN_FAILURE,
        payload: err.response.data
      });
    });
}

export const currentUser=(token)=>dispatch=>{
  setAuthToken(token);
  const decoded = jwt_decode(token);
  dispatch(setCurrentUser(decoded));
}

export const signOut = () => dispatch => {
  localStorage.removeItem('token');
  setAuthToken(null);
  dispatch({
    type:'LOGOUT_SUCCESS',
    payload:null
  });
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
        payload: err.response.data
      });
    });
}