import React, { Component } from 'react';
import Post from '../components/post';
//import './main.css';

class Home extends Component {
  render() {
    return (
        <div className="Home">
            <Post 
                comImage="https://orig00.deviantart.net/4008/f/2017/047/7/d/magma_dragon_by_tsaoshin-dazc6fq.png" 
                title="test dragon" 
                subTitle="Test Subtitle" 
                date="1/3/18" 
                user="Jim"
                id="blog1234"
            />
            <div className="clearfix">
                <a className="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
            </div>
        </div>
    );
  }
}

export default Home;