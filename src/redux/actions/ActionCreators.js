import { Types } from '../constants/actionTypes';

export const userLogin = (user) => ({ type: Types.LOGIN, payload: { user } })

export const userSignUp = (signUpInfo) => ({ type: Types.SIGN_UP, payload: { signUpInfo } })

//   formSubmittionStatus: (status) => ({ type: Types.FORM_SUBMITION_STATUS, payload: { status }}),

//   login: (user) => ({ type: Types.LOGIN, payload: { user } })
// }