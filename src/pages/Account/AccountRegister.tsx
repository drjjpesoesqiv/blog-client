import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { accountRegister } from '../../actions/account';

interface Props {
  accountRegister: (email:string, username:string, password:string) => any;
  account:any;
}

interface State {
  email:string;
  username:string;
  password:string;
}

class AccountRegister extends React.Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: ""
    }
  }

  register = (e:any) => {
    e.preventDefault();
    this.props.accountRegister(
      this.state.email,
      this.state.username,
      this.state.password
    );
  }

  onTextInputChange = (e:any) => {
    var state:any = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    if (this.props.account.username)
      return (<Redirect to="/posts/page/1" />);

    return(
      <div>
        <h1>Register</h1>
        <br /><br />
        <form onSubmit={this.register}>
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="email"
            onChange={this.onTextInputChange}
          />
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.onTextInputChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.onTextInputChange}
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps({ account }:any) {
  return {
    account: account
  }
}

export default connect(mapStateToProps, { accountRegister })(AccountRegister);
