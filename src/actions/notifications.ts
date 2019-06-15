export const NEW_NOTIFICATION = 'new_notification';
export const DISMISS_NOTIFICATION = 'dismiss_notification';

export const newNotification = (notificationId:string, message:string) =>
  (dispatch:Function) => {
    dispatch({
      type: NEW_NOTIFICATION,
      payload: {
        notificationId: notificationId,
        message: message
      }
    })
  }

export const dismissNotification = (notificationId:string) =>
  (dispatch:Function) => {
    dispatch({
      type: DISMISS_NOTIFICATION,
      payload: {
        notificationId: notificationId
      }
    })
  }
