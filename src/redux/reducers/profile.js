import { Types } from '../constants/actionTypes';

const initialState = {

    profile: {
    username: "",
    email: "",
  },
//   formSubmitted: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
    console.log('login', action.payload.user)
      return {
        ...state,
        profile: action.payload.user,
        formSubmitted: false 
      }
      case Types.SIGN_UP:
      return {
        ...state,
        userSignUpInfo: action.payload.signUpInfo
      }
   
    case Types.FORM_SUBMITION_STATUS:
      return {
        ...state,
        formSubmitted: action.payload.status
      }
    default:
      return state;
  }
}

export default reducer;