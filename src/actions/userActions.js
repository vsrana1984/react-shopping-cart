import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, 
  USER_LOGOUT, SET_MESSAGE, USER_REGISTER_REQUEST, 
  USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from "../types";

import AuthService from '../services/auth.service';

//register action....................
export const register = (username, email, password) => (dispatch) => {
  dispatch({type: USER_REGISTER_REQUEST, payload: {username, email, password}});

  return AuthService.register(username, email, password).then(
    (response) => {
      dispatch({
        type: USER_REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: response.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      dispatch({
        type: USER_REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });

      return Promise.reject();
    }
  );
};

//login action....................
export const doLogin = (email, password) => async (dispatch) => {
  
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
  
  return AuthService.login(email, password).then(
    (data) => {
      dispatch({ type: USER_SIGNIN_SUCCESS,payload: { user: data } });

      return Promise.resolve();

    },
    (error) => {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        dispatch({ type: USER_SIGNIN_FAIL });

        dispatch({ type: SET_MESSAGE,payload: message });
    } 
  );
};

//logout.....
export const logout = () => (dispatch) => {
  AuthService.logout();
  dispatch({ type: USER_LOGOUT })
};

