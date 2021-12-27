import { Types } from '../constants/actionTypes';

const initialState = {

    profile: {
    username: "",
    email: "",
  },
  formSubmitted: false
}

const reducer = (state = initialState, action) => {
  console.log("action.payload",action.payload);
  switch (action.type) {
    case Types.LOGIN:
      return {
        ...state,
        profile: action.payload,
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

      case Types.GET_CURRENT_USER:
      return {
        ...state,
        currentUserInfo: action.payload
      }
    default:
      return state;
  }
}

export default reducer;