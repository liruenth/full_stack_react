import React, { Component } from 'react';
import Link from '../components/link';

class PageNotFound extends Component {
  render() {
    return (
        <div>
            <h1>This page does not exist.</h1>
            <Link url="/" name="Back to Home" />
        </div>
    );
  }
}

export default PageNotFound;