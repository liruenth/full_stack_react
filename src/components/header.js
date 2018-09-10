import React, { Component } from 'react';
import Link from './link';

class Header extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
                    <div className="container">
                        <a className="navbar-brand" href="/">Start Bootstrap</a>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        Menu
                        <i className="fa fa-bars"></i>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <Link url="/" name="home" />
                                <Link url="/about" name="about" />
                                <Link url="/contact" name="contact" />
                                <Link url="/signin" name="signin" />
                                <Link url="/signup" name="signup" />
                                {this.props.loggedIn ? (
                                    <div>
                                        <Link url="/signout" name="signout" />
                                        <Link url="/addNewBlog" name="addNewBlog" />
                                        <p style={{color:"white"}}>{this.props.user}</p>
                                    </div>
                                ) : null}
                            </ul>
                        </div>
                    </div>
                </nav>

                <header className="masthead" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1509486952655-66ae56df4747?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a67789760c6f106ea9bb6b8f33ffba1d&auto=format&fit=crop&w=1489&q=80)'}}>
                    <div className="overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-10 mx-auto">
                            <div className="site-heading">
                                <h1>Clean Blog</h1>
                                <span className="subheading">A Blog Theme by Start Bootstrap</span>
                            </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;