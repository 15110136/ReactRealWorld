const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
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
      return state;
    case 'LOAD_ARTICLES_FAILURE':
      console.log('load failure');
      return state;
    default:
      return state;
  }
};

export default projectReducer;