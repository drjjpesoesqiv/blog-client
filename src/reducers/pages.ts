import { GET_PAGE } from '../actions/pages';

const initialState = {
  page: {
    title: "",
    content: ""
  }
}

export function pagesReducer(state = initialState, action:any) {
  switch(action.type) {
    case GET_PAGE:
      return { ...state, page: action.payload }
    default:
      return state;
  }
}
