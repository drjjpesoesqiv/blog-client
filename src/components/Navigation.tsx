import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getNavigationItems } from '../actions/navigation';
import { accountLogout } from '../actions/account';

interface Props {
  getNavigationItems: () => void;
  accountLogout: () => void;
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
    } else {
      links.push(<Link key="logout" to="/account/login" onClick={this.props.accountLogout}>Logout</Link>)
    }

    return(
      <div>
        {links}
        {
          this.props.account.username
            ? <span style={{ float: "right" }}>whoami? {this.props.account.username}</span>
            : ""
        }
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

export default connect(mapStateToProps, { getNavigationItems, accountLogout })(Navigation);