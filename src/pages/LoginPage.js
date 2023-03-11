import React, { Component } from "react";

const handleChange = (e) => {
  this.setState({
    login: e.target.value,
  });
};

class LoginPage extends Component {
  state = {
    login: "",
    password: "",
  };
  render() {
    console.log(this.state.login);
    return (
      <div>
        <label htmlFor="">
          Podaj login
          <input type="text" value={this.handleChange} />
        </label>
        <label htmlFor="">
          <br />
          Podaj hasło
          <input type="password" />
        </label>
        <br />
        <button>Zaloguj</button>
      </div>
    );
  }
}

export default LoginPage;
