import React, { Component } from 'react';
import InputFuncs from '../helper-functions/inputFuncs';

class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
    }

    render() {
        return (
          <div className="container">
            <form style={{marginTop:"40px"}}>
              <h1>{this.props.title}</h1>
              <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input type="email" className="form-control" id="exampleInputUsername" placeholder="Enter email" 
                  name="username" value={this.state.username} onChange={(e) => InputFuncs.handleInputChange(e, this)} 
                />
                <label htmlFor="exampleInputEmail">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" 
                  name="email" value={this.state.email} onChange={(e) => InputFuncs.handleInputChange(e, this)} 
                />
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" 
                  name="password" value={this.state.password} onChange={(e) => InputFuncs.handleInputChange(e, this)} 
                />
              </div>
              <button type='button' onClick={(e) => this.props.login(e, this.state)} className="btn btn-primary">Submit</button>
            </form>
          </div>
        );
      }
    }
    
    export default LoginForm;