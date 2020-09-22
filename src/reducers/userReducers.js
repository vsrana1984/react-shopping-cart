import { USER_LOGOUT, USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS } from "../types";

const user = JSON.parse(localStorage.getItem("user"));

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export const userLoginReducer = (
  state = initialState, action) =>{  
  const { type, payload } = action;
  
  switch(type){
      case USER_REGISTER_REQUEST:
        return {
          ...state,
          isLoggedIn: false,
        };
      case USER_REGISTER_SUCCESS:
          return {
            ...state,
            isLoggedIn: false,
        };
      case USER_REGISTER_FAIL:
        return {
          ...state,
          isLoggedIn: false,
        };
      case USER_SIGNIN_REQUEST:
        return {
          ...state,
          isLoggedIn: false,
          user: payload,
        };
      case USER_SIGNIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
          user: payload.user,
        };
      case USER_SIGNIN_FAIL:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      case USER_LOGOUT:
        return {
          ...state,
          isLoggedIn: false,
          user: null,
        };
      default: 
        return state;
  }  
  
}