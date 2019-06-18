import React from 'react';

interface Props {
  _authorId:string;
  username: string;
  date:string;
  content:string;
}

class Comment extends React.Component<Props> {
  render() {
    return(
      <div className="comment">
        <small className="author">{this.props.username}</small>
        <br />
        <small className="date">{this.props.date}</small>
        <p className="content">{this.props.content}</p>
      </div>
    );
  }
}

export default Comment;
