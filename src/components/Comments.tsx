import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

import { getComments } from '../actions/comments';

interface Props {
  _postId:string;
  getComments: (_postId:string) => void;
  comments:[];
}

class Comments extends React.Component<Props> {
  componentWillMount() {
    this.props.getComments(this.props._postId);
  }

  render() {
    const comments = this.props.comments.map((comment:any) => {
      return (
        <Comment
          key={comment._id}
          _authorId={comment._authorId}
          date={comment.date}
          content={comment.content} />
      );
    });
    return(
      <div className="comments">{comments}</div>
    );
  }
}

function mapStateToProps({ comments }:any) {
  return {
    comments: comments
  }
}

export default connect(mapStateToProps, { getComments })(Comments);
