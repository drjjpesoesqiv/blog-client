import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const GET_COMMENTS = 'get_comments';
export const ADD_COMMENT = 'add_comment';

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

export const addComment = (_postId:string, content:string) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.put(`/comments/${_postId}`, { content: content })
      .then((response:AxiosResponse) => {
        dispatch(getComments(_postId));
      })
      .catch((err:AxiosError) => {
      });
    }