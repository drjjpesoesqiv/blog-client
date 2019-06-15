import { combineReducers } from 'redux';

import { accountReducer } from './account';
import { commentsReducer } from './comments';
import { navigationReducer } from './navigation';
import { notificationsReducer } from './notifications';
import { pagesReducer } from './pages';
import { postsReducer } from './posts';

export default combineReducers({
  account: accountReducer,
  comments: commentsReducer,
  navigation: navigationReducer,
  notifications: notificationsReducer,
  pages: pagesReducer,
  posts: postsReducer
});
