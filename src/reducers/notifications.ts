import {
  NEW_NOTIFICATION,
  DISMISS_NOTIFICATION
} from '../actions/notifications';

const initialState:any = {};

export function notificationsReducer(state = initialState, action:any) {
  switch (action.type) {
    case NEW_NOTIFICATION:
      var notifications = state;
      notifications[action.payload.notificationId] = action.payload.message;
      return action.payload;
    case DISMISS_NOTIFICATION:
      var notifications = state;
      delete notifications[action.payload.notificationId];
      return notifications;
    default:
      return state;
  }
}

export default notificationsReducer;
