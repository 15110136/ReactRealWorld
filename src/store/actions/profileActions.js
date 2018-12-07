import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

export const getProfile = (username) => dispatch => {
  const auth = 'Token '.concat(localStorage.getItem('token'));
  axios.get(`${API_ROOT}/profiles/${username}`, {
      headers: {
        Authorization: auth
      }
    })
    .then(res => {
      dispatch({
        type: 'GET_PROFILE_SUCCESS',
        payload: res.data.profile
      });
    });
}