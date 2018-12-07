const initState = {
  profile: {}
};

const profileReducer=(state=initState,action)=>{
  switch (action.type) {
    case "GET_PROFILE_SUCCESS":
      console.log('get profile success');
      return{
        ...state,
        profile:action.payload
      }
  
    default:
      return state;
  }
}
export default profileReducer;