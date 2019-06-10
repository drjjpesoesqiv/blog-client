import { combineReducers } from 'redux';

import { navigationReducer } from './navigation';
import { pagesReducer } from './pages';
import { postsReducer } from './posts';

export default combineReducers({
  navigation: navigationReducer,
  pages: pagesReducer,
  posts: postsReducer
});
