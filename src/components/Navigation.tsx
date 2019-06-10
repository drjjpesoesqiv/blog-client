import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNavigationItems } from '../actions/navigation';

interface Props {
  getNavigationItems: () => void;
  items:any;
}

class Navigation extends React.Component<Props> {
  componentWillMount() {
    this.props.getNavigationItems();
  }

  render() {
    var links = this.props.items.map((link:any, index:number) => {
      return <Link key={index} to={link.href}>{link.title}</Link>
    });
    return(
      <div>
        {links}
      </div>
    );
  }
}

function mapStateToProps({ navigation }:any) {
  return {
    items: navigation.items
  }
}

export default connect(mapStateToProps, { getNavigationItems })(Navigation);