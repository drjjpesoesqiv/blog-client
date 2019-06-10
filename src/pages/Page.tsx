import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getPageByNiceTitle } from '../actions/pages';

interface Props {
  history:any;
  location:any;
  match:any;
  title:string;
  content:string;
  getPageByNiceTitle: (niceTitle:string) => void;
}

class Page extends React.Component<Props> {
  stopListening:Function = () => { return; }

  componentWillMount() {
    this.props.getPageByNiceTitle(this.props.match.params.niceTitle);

  }

  componentWillReceiveProps(next:any) {
    if (next.match.params.niceTitle !== this.props.match.params.niceTitle)
      this.props.getPageByNiceTitle(next.match.params.niceTitle);
  }


  render() {
    return(
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

function mapStateToProps({ pages }:any) {
  const { title, content } = pages.page;
  return {
    title: title,
    content: content
  }
}

export default connect(mapStateToProps, { getPageByNiceTitle })(withRouter(Page));
