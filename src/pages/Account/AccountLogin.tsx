import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

interface Props {
  account:any;
}

class AccountLogin extends React.Component<Props> {
  render() {
    if (this.props.account.username)
      return (<Redirect to="/posts/page/1" />);

    return(
      <div>
        <h1>Login</h1>
        <br /><br />
        <LoginForm />
      </div>
    );
  }
}

function mapStateToProps({ account }:any) {
  return {
    account: account
  };
}

export default connect(mapStateToProps, {})(AccountLogin);
