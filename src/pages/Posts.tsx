import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

import Pagination from '../components/Pagination';

import { getPostsCount, getPostsByPage } from '../actions/posts';

interface Props {
  history:any;
  location:any;
  match:any;
  getPostsCount: () => void;
  getPostsByPage: (page:number) => void;
  posts:any;
  count:number;
  perPage:number;
}

class Posts extends React.Component<Props> {
  componentWillMount() {
    this.props.getPostsCount();
    this.props.getPostsByPage(this.props.match.params.page || 1);
  }

  changePage = (page:number) => {
    this.props.history.push(`/posts/page/${page}`);
    this.props.getPostsByPage(page);
  }

  render() {
    const posts = this.props.posts.map((post:any) => {
      return <li key={post._id}><Link to={`/post/${post.niceTitle}`}>{post.title}</Link></li>
    })
    return(
      <div>
        <h1>Posts</h1>
        <ul className="posts">{posts}</ul>
        <Pagination
          callback={this.changePage}
          count={this.props.count}
          page={parseInt(this.props.match.params.page) || 1}
          perPage={this.props.perPage} />
      </div>
    );
  }
}

function mapStateToProps({ posts }:any) {
  return {
    posts: posts.posts,
    count: posts.count,
    perPage: posts.perPage
  }
}

export default connect(mapStateToProps, { getPostsCount, getPostsByPage })(withRouter(Posts));