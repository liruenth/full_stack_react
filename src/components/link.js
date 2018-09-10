import React, { Component } from 'react';

class Link extends Component {
  render() {
    return (
        <li className="nav-item">
          <a style={{color:"white"}} className="nav-link" href={this.props.url}>{this.props.name}</a>
        </li>
    );
  }
}

export default Link;