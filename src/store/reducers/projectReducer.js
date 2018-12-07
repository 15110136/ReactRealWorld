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
        projects: action.payload
      }
    case 'LOAD_ARTICLES_FAILURE':
      console.log(action.payload);
      return state;
    case 'ARTICLE_FAVORITED':
      var a=state.projects.articles;
      var b= action.payload.article;
      // console.log(a);
      for (const key in a) {
        if (a.hasOwnProperty(key)) {
          const element = a[key];
          if(element.slug===b.slug){
            element.favorited=true;
            element.favoritesCount++;
          }
        }
      }
      return state;
    case 'ARTICLE_UNFAVORITED':
      return {
        ...state,
        projects: action.payload

      }
    default:
      return state;
  }
};

export default projectReducer;