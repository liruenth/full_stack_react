import React, { Component } from 'react';
import LoginForm from '../components/loginForm';
import ApiFuncs from '../helper-functions/apiFuncs';

class Signup extends Component {
  signup = (e, data) => {
    ApiFuncs.callApi("/signup", {method: 'POST', body: JSON.stringify(data), headers: { "Content-Type": "application/json" }}, (err) => {
        console.log("Error from sql query");
      })
      .then(res => {
        console.log("result");
        console.log(res);
        this.props.addUser(data.username + res.id); 
      })
      .catch(err => {
        console.log("caught error");
        console.log(err);
      });
  };

  render() {
    return (
      <LoginForm title="Signup" login={this.signup} />
    );
  }
}

export default Signup;