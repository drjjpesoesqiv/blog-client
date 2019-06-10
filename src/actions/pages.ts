import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const GET_PAGE = 'get_page';

export const getPageByNiceTitle = (niceTitle:string) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get(`/pages/${niceTitle}`)
      .then((res:AxiosResponse) => {
        dispatch({
          type: GET_PAGE,
          payload: res.data
        })
      });
    }