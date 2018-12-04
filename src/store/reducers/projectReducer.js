const initState = {
  projects: []
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT_SUCCESS':
      console.log('create project success');
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error');
      return state;
    case 'DELETE_PROJECT_SUCCESS':
      console.log('delete project success');
      return state;
    case 'DELETE_PROJECT_ERROR':
      console.log('delete project error');
      return state;
    case 'LOAD_ARTICLES_SUCCESS':
      console.log('load success');
      return {
        ...state,
        projects:action.payload
      }
    case 'LOAD_ARTICLES_FAILURE':
      console.log(action.payload);
      return state;
    default:
      return state;
  }
};

export default projectReducer;