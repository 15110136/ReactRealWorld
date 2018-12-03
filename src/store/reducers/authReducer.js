const initState = {
  emailErrors: null,
  passwordErrors:null,
  usernameErrors:null,
  isAuthenticated: false,
  user: {}
};

const isEmpty = (value) => {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'object' && Object.keys(value).length === 0) ||
    (typeof value === 'string' && value.trim().length === 0)
  );
}
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    case 'LOGIN_FAILURE':
      return {
        ...state,
        authError: "Login failed"
      }
    case 'SIGN_UP_ERROR':
      return {
        ...state,
        emailErrors:action.payload.email[0],
        passwordErrors:action.payload.password[0],
        usernameErrors:action.payload.username[0]
      }
    case 'SIGN_UP_SUCCESS':
      return {
        ...state,
        authError: null,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }

}
export default authReducer;


// const initState = {
//   authError: null
// };
// const authReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'LOGIN_ERROR':
//       return {
//         ...state,
//         authError: "Login failed"
//       }
//     case 'LOGIN_SUCCESS':
//       console.log("Login success");
//       return {
//         ...state,
//         authError: null
//       }
//     case 'SIGNOUT_SUCCESS':
//       console.log('signout success');
//       return state;
//     case 'SIGNUP_SUCCESS':
//       console.log('sign up success');
//       return {
//         ...state,
//         authError: null
//       }
//     case 'SIGNUP_ERROR':
//       console.log('sign up error');
//       return {
//         ...state,
//         authError: action.err.message
//       }
//     default:
//       return state;
//   }

// }
// export default authReducer;