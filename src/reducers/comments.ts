import {
  GET_COMMENTS
} from '../actions/comments';

const initialState:any = [];

export function commentsReducer(state = initialState, action:any) {
  switch (action.type) {
    case GET_COMMENTS:
      return action.payload;
    default:
      return state;
  }
}
