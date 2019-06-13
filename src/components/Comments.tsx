import React from 'react';
import { connect } from 'react-redux';
import Comment from './Comment';

import { getComments, addComment } from '../actions/comments';

interface Props {
  _postId:string;
  getComments: (_postId:string) => void;
  addComment: (_postId:string, content:string) => void;
  comments:[];
}

interface State {
  comment:string;
}

class Comments extends React.Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.state = {
      comment: ""
    };
  }

  componentWillReceiveProps(nextProps:any) {
    this.props.getComments(nextProps._postId);
  }

  componentWillMount() {
    this.props.getComments(this.props._postId);
  }

  onSubmitComment = (e:React.FormEvent) => {
    e.preventDefault();
    this.props.addComment(this.props._postId, this.state.comment);
    this.setState({ comment: "" });
  }

  onCommentChange = (e:any) => {
    this.setState({
      comment: e.target.value
    })
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
      <div className="comments">
        <div>{comments}</div>
        <form onSubmit={this.onSubmitComment}>
          <h4>Submit a comment:</h4>
          <textarea onChange={this.onCommentChange} value={this.state.comment}></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ comments }:any) {
  return {
    comments: comments
  }
}

export default connect(mapStateToProps, { getComments, addComment })(Comments);
