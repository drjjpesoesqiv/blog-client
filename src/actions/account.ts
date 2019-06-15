import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const ACCOUNT_LOGIN = 'account_login';
export const ACCOUNT_LOGOUT = 'account_logout';
export const ACCOUNT_REGISTER = 'account_register';

export const accountHydrate = () =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get('/users/hydrate')
      .then((response:AxiosResponse) => {
        if (response.data.username) {
          dispatch({
            type: ACCOUNT_LOGIN,
            payload: response.data
          })
        }
      })
      .catch((err:AxiosError) => {
        console.log(err);
      })
    }

export const accountLogin = (username:string, password:string) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.post('/users/login', { username: username, password: password })
      .then((response:AxiosResponse) => {
        dispatch({
          type: ACCOUNT_LOGIN,
          payload: response.data
        })
      })
      .catch((err:AxiosError) => {
        console.log(err);
      });
  }

export const accountLogout = () =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get('/users/logout')
      .then((response:AxiosResponse) => {
        dispatch({
          type: ACCOUNT_LOGOUT
        })
      })
      .catch((err:AxiosError) => {
        console.log(err);
      });
  }

export const accountRegister = (email:string, username:string, password:string) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.post('/users/register', {
      email: email,
      username: username,
      password: password
    })
    .then((response:AxiosResponse) => {
      dispatch({
        type: ACCOUNT_REGISTER,
        payload: response.data
      })
    })
    .catch((err:AxiosError) => {
      console.log(err);
    });
  }