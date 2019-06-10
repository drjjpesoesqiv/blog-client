import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';

import * as serviceWorker from './serviceWorker';

import axios from 'axios';
import thunk from 'redux-thunk';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Posts from './pages/Posts';
import Post from './pages/Post';
import Page from './pages/Page';

import reducers from './reducers';

import Header from './components/Header';
import Footer from './components/Footer';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  withCredentials: true
});

var store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div id="container">
        <Header />
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/:niceTitle" component={Post} />
        <Route exact path="/posts" component={Posts} />
        <Route exact path="/posts/page/:page" component={Posts} />
        <Route exact path="/:niceTitle" component={Page} />
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
