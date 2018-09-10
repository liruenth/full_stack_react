import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import ApiFuncs from '../helper-functions/apiFuncs';

class Signin extends Component {
  signin = (e, data) => {
    ApiFuncs.callApi("/signin", {method: 'POST', body: JSON.stringify(data), headers: { "Content-Type": "application/json" }}, (err) => {
      console.log("Error from sql query");
    })
    .then(res => {
      console.log("signin result");
      console.log(res);
      this.props.addUser(data.username + res.id); 
    })
    .catch(err => {
      console.log("signin caught error");
      console.log(err);
    });
  };

  render() {
    return (
      <LoginForm title="Signin" login={this.signin} />
    );
  }
}

export default Signin;