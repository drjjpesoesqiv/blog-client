import React from 'react';
import { connect } from 'react-redux';

import { accountLogin } from '../actions/account';

interface Props {
  accountLogin: (username:string, password:string) => void;
}

interface State {
  username:string;
  password:string;
}

class LoginForm extends React.Component<Props,State> {
  constructor(props:any) {
    super(props);
    this.state = {
      username: "",
      password: ""
    }
  }

  login = (e:any) => {
    e.preventDefault();
    this.props.accountLogin(this.state.username, this.state.password);
  }

  onInputTextChange = (e:any) => {
    var state:any = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  }

  render() {
    return (
      <form onSubmit={this.login}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.onInputTextChange}
          placeholder="username" />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.onInputTextChange}
          placeholder="password" />
        <button type="submit">Login</button>
      </form>
    );
  }
}

function mapStateToProps(state:any) {
  return {};
}

export default connect(mapStateToProps, { accountLogin })(LoginForm);