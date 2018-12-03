import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

const Articles = {
  all: axios.get(`${API_ROOT}/articles?limit=10`).then(res => res.data).catch((error) => {
    console.log(error);
  })
};

const Auth = {
  login: (email, password) =>
    axios.post(`${API_ROOT}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: `email=${email}&password=${password}`
    }).then(res =>
      res.json().then(user => ({
        user,
        res
      }))
    ).then(({
      user,
      res
    }) => {
      if (!res.ok) {
        console.log('error login');
      } else {
        localStorage.setItem('token', user.token);
        return user
      }
    })
};

export default {
  Articles,
  Auth
};