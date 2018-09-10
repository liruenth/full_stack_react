import React, { Component } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Signin from './pages/signin';
import Signup from './pages/signup';
import AddNewBlog from './pages/addNewBlog';
import PageNotFound from './pages/page-not-found';
import UpdateBlog from './pages/updateBlog';
import './main.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import ApiFuncs from './helper-functions/apiFuncs';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: '',
        response: '',
    }
  } 

  componentDidMount() {
    // ApiFuncs.callApi('/test')
    //   .then(res => {
    //     this.setState({ response: res.message }); 
    //     console.log(res); 
    //     console.log(this.state.response);
    //   })
    //   .catch(err => console.log(err));
  }

  AddUser = (user) => {
    this.setState({user: user});
  };

  isLoggedIn = () => {
    return this.state.user !== '';
  };

  render() {
    console.log("render app user: " + (this.state.user !== '' ? this.state.user : "no user"));
    return (
      <div className="App">
      
        <Header loggedIn={this.isLoggedIn()} user={this.state.user} />
        <p className="App-intro">{this.state.response}</p>
        <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/signin" render={() => (
            <Signin addUser={this.AddUser} />
          )}/>
          <Route path="/signup" render={() => (
            <Signup addUser={this.AddUser} />
          )}/>
          <Route path="/addNewBlog" render={() => (
            this.isLoggedIn() ? (
              <AddNewBlog />
            ) : (
              <Redirect to="/signin"/>
            )
          )}/>
          <Route path="/blog/:id" render={() => (
            this.isLoggedIn() ? (
              <UpdateBlog />
            ) : (
              <Redirect to="/signin"/>
            )
          )}/>
          <Route path="/signout" render={() => {
            this.setState({user:""});
            return <Redirect to="/"/>;
          }}/>
          <Route component={PageNotFound}/>
        </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
