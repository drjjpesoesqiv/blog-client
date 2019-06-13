import { combineReducers } from 'redux';

import { commentsReducer } from './comments';
import { navigationReducer } from './navigation';
import { pagesReducer } from './pages';
import { postsReducer } from './posts';

export default combineReducers({
  comments: commentsReducer,
  navigation: navigationReducer,
  pages: pagesReducer,
  posts: postsReducer
});
