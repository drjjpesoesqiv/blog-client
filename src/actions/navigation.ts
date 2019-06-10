import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const GET_NAVIGATION_ITEMS = 'get_navigation_items';

export const getNavigationItems = () =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get('/navigation')
      .then((res:AxiosResponse) => {
        dispatch({
          type: GET_NAVIGATION_ITEMS,
          payload: res.data
        });
      })
      .catch((err:AxiosError) => {
      });
    }