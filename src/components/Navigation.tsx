import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNavigationItems } from '../actions/navigation';
import { accountLogin } from '../actions/account';

interface Props {
  getNavigationItems: () => void;
  account:any;
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

    if ( ! this.props.account.username) {
      links.push(<Link key="register" to="/account/register">Register</Link>);
      links.push(<Link key="login" to="/account/login">Login</Link>);
    }

    return(
      <div>
        {links}
      </div>
    );
  }
}

function mapStateToProps({ account, navigation }:any) {
  return {
    account: account,
    items: navigation.items
  }
}

export default connect(mapStateToProps, { getNavigationItems })(Navigation);