import {
  ACCOUNT_LOGIN,
  ACCOUNT_REGISTER
} from '../actions/account';

const initialState:any = [];

export function accountReducer(state = initialState, action:any) {
  switch (action.type) {
    case ACCOUNT_LOGIN:
      return action.payload;
    case ACCOUNT_REGISTER:
      return action.payload;
    default:
      return state;
  }
}

export default accountReducer;
