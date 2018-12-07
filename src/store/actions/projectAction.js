import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

export const getArticles = (page, token) => dispatch => {
  const Auth = 'Token '.concat(token);
  axios.get(`${API_ROOT}/articles?limit=10&offset=${(page-1)*10}`, {
      headers: {
        Authorization: Auth
      }
    })
    .then(res => {
      dispatch({
        type: 'LOAD_ARTICLES_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
    });
}

export const favorite = (slug) => dispatch => {
  let token = localStorage.getItem('token');
  const Auth = 'Token '.concat(token);
  axios.post(`${API_ROOT}/articles/${slug}/favorite`, {}, {
      headers: {
        Authorization: Auth
      }
    })
    .then(res => {
      dispatch({
        type: "ARTICLE_FAVORITED",
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
    });
}
export const unfavorite = (slug) => dispatch => {
  let token = localStorage.getItem('token');
  const Auth = 'Token '.concat(token);
  axios.delete(`${API_ROOT}/articles/${slug}/favorite`,{headers:{Authorization:Auth}})
    .then(res=>{
      dispatch({
        type:"ARTICLE_UNFAVORITED",
        payload:res.data
      });
    })
    .catch(err=>console.log(err));
}
