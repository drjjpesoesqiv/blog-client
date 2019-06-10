import { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

export const GET_POSTS_COUNT = 'get_posts_count';
export const GET_POSTS = 'get_posts';
export const GET_POST = 'get_post';

export const getPostsCount = () =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get(`/posts/count`)
      .then((res:AxiosResponse) => {
        dispatch({
          type: GET_POSTS_COUNT,
          payload: res.data
        })
      })
    }

export const getPostByNiceTitle = (niceTitle:string) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get(`/posts/${niceTitle}`)
      .then((res:AxiosResponse) => {
        dispatch({
          type: GET_POST,
          payload: res.data
        })
      });
    }

export const getPostsByPage = (page:number) =>
  (dispatch:Function, getState:Function, axios:AxiosInstance) => {
    axios.get(`/posts/page/${page}`)
      .then((res:AxiosResponse) => {
        dispatch({
          type: GET_POSTS,
          payload: res.data
        })
      });
    }
