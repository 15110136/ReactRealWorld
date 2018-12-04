import axios from 'axios';

const API_ROOT = 'https://conduit.productionready.io/api';

export const getArticles = (page,token) => dispatch => {
  const Auth='Token '.concat(token);
  axios.get(`${API_ROOT}/articles?limit=10&offset=${(page-1)*10}`,{headers:{Authorization:Auth}})
    .then(res => {
      dispatch({
        type: 'LOAD_ARTICLES_SUCCESS',
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err.response);
      
      // dispatch({
      //   type: 'LOAD_ARTICLES_FAILURE',
      //   payload: err.response.data
      // });
    });
}


export const createProject = (project) => {
  return (dispatch, getState, {
    getFirestore
  }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore.collection('projects').add({
      ...project,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      authorId: authorId,
      createdAt: new Date()
    }).then(() => {
      dispatch({
        type: 'CREATE_PROJECT_SUCCESS'
      });
    }).catch(err => {
      dispatch({
        type: 'CREATE_PROJECT_ERROR'
      }, err);
    });
  }
};

export const deleteProject = (id) => {
  return (dispatch, getState, {
    getFirestore
  }) => {
    const firestore = getFirestore();
    firestore.collection('projects').doc(id).delete()
      .then((res) => {
        dispatch({
          type: 'DELETE_PROJECT_SUCCESS'
        });
      }).catch(err => {
        dispatch({
          type: 'DELETE_PROJECT_ERROR',
          err
        });
      });
  }
}