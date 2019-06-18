import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

import CommentForm from './CommentForm';
import LoginForm from './LoginForm';

import { getComments } from '../actions/comments';

interface Props {
  _postId:string;
  getComments: (_postId:string) => void;
  account:any;
  comments:[];
}

interface State {
  commentsLoaded:boolean;
}

class Comments extends React.Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.state = { commentsLoaded: false }
  }

  componentWillReceiveProps(props:any) {
    if ( ! this.state.commentsLoaded && props._postId) {
      this.setState({
        commentsLoaded: true
      }, () => this.props.getComments(props._postId));
    }
  }

  render() {
    const comments = this.props.comments.map((comment:any) => {
      return (
        <Comment
          key={comment._id}
          _authorId={comment._authorId}
          username={comment.username}
          date={comment.date}
          content={comment.content} />
      );
    });
    return(
      <div className="comments">
        <div>{comments}</div>
        {
          this.props.account.username
            ? <CommentForm _postId={this.props._postId} />
            : <LoginForm />
        }
      </div>
    );
  }
}

function mapStateToProps({ account, comments }:any) {
  return {
    account: account,
    comments: comments
  }
}

export default connect(mapStateToProps, { getComments })(Comments);
