import { Types } from "../constants/actionTypes";
import { userService } from "../../services/userServices";

export const userLogin = (user) => ({
  type: Types.LOGIN,
  payload:{users : userService.userAuthentication(user)},
});

export const userSignUp = (signUpInfo) => ({
  type: Types.SIGN_UP,
  payload: { signUpInfo },
});

export const formSubmittionStatus = (status) => ({
  type: Types.FORM_SUBMITION_STATUS,
  payload: { status },
});

export const currentUserInfo = (userInfo) => ({
    type: Types.GET_CURRENT_USER,
    payload: {currentUsersInfo : userService.getCurrentUser()},
  });
