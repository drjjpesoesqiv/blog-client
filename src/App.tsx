import React from 'react';
import { Route } from 'react-router';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import axios from 'axios';
import thunk from 'redux-thunk';

import Posts from './pages/Posts';
import Post from './pages/Post';
import Page from './pages/Page';

import Header from './components/Header';
import Footer from './components/Footer';

import reducers from './reducers';

import './styles/App.scss';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  withCredentials: true
});

var store = createStore(
  reducers,
  applyMiddleware(thunk.withExtraArgument(axiosInstance))
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div id="container">
          <Header />
          <Route exact path="/" component={Posts} />
          <Route exact path="/post/:niceTitle" component={Post} />
          <Route exact path="/posts" component={Posts} />
          <Route exact path="/posts/page/:page" component={Posts} />
          <Route exact path="/:niceTitle" component={Page} />
          <Footer />
        </div>
      </Provider>
    );
  }
}

