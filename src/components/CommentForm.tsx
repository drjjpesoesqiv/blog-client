import React from 'react';
import { connect } from 'react-redux';

import { addComment } from '../actions/comments';

interface Props {
  addComment: (_postId:string, comment:string) => void;
  _postId:string;
}

interface State {
  comment:string;
}

class CommentForm extends React.Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.state = {
      comment: ""
    }
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
    return(
      <form onSubmit={this.onSubmitComment}>
        <h4>Submit a comment:</h4>
        <textarea onChange={this.onCommentChange} value={this.state.comment}></textarea>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

function mapStateToProps(state:any) {
  return {};
}

export default connect(mapStateToProps, { addComment })(CommentForm);