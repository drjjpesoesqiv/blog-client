import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getPostByNiceTitle } from '../actions/posts';

interface Props {
  history:any;
  location:any;
  match:any;
  getPostByNiceTitle: (niceTitle:string) => void;
  title:string;
  date:string;
  author:string;
  content:string
}

class Post extends React.Component<Props> {
  back = () => {
    this.props.history.goBack();
  }

  componentWillMount() {
    this.props.getPostByNiceTitle(this.props.match.params.niceTitle);
  }

  render() {
    return(
      <div className="post">
        <button style={{float:"right"}} onClick={this.back}>back</button>
        <h1>{this.props.title}</h1>
        <small className="date">{this.props.date}</small>
        <br />
        <small className="author">{this.props.author}</small>
        <p className="content">{this.props.content}</p>
      </div>
    )
  }
}

function mapStateToProps({ posts }:any) {
  return {
    title: posts.post.title,
    date: posts.post.date,
    author: posts.post.author,
    content: posts.post.content
  }
}

export default connect(mapStateToProps, { getPostByNiceTitle })(withRouter(Post));