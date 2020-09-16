import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_LOGOUT } from "../types";
import Axios from 'axios';
import Cookies from 'js-cookie';

const doLogin = (email, password) => async (dispatch) => {
  
  dispatch({type: USER_SIGNIN_REQUEST, payload: {email, password}});
  
  try {
    const { data } = await Axios.post('/api/users/login', {email, password});
    dispatch({type: USER_SIGNIN_SUCCESS, payload: data});
    Cookies.set('userInfo', JSON.stringify(data));
  } catch (error) {
    console.log('Error');
    dispatch({type: USER_SIGNIN_FAIL, payload: error.message});
  }

}
//logout.....
const logout = () => (dispatch) => {
  Cookies.remove("userInfo");
  dispatch({ type: USER_LOGOUT })
}

export {
  doLogin,
  logout
}