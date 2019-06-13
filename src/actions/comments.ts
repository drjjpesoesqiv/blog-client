import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const GET_COMMENTS = 'get_comments';

export const getComments = (_postId:string) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get(`/comments/${_postId}`)
      .then((response:AxiosResponse) => {
        dispatch({
          type: GET_COMMENTS,
          payload: response.data
        })
      })
      .catch((err:AxiosError) => {
      });
    }