import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3 mx-auto">
                    <img className="img-thumbnail" src={this.props.comImage} alt={this.props.title} />
                </div>
                <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="post-preview">
                    <a href={"/blogs/" + this.props.id}>
                        <h2 className="post-title">
                        {this.props.title}
                        </h2>
                        <h3 className="post-subtitle">
                        {this.props.subTitle}
                        </h3>
                    </a>
                    <p className="post-meta">Posted by
                        <a href="#">Start Bootstrap</a>
                        {this.props.date}
                    </p>
                </div>

                <hr></hr>

                </div>
                {this.props.user ? (
                <div className="col-lg-1 mx-auto">
                    <a style={{marginTop:"20px"}} href={'/blogs/' + this.props.id + '/edit'} className="btn btn-outline-warning">Edit</a>
                    <form action={"/blogs/" + this.props.id + "?_method=DELETE"} method="POST" >
                    <button style={{marginTop:"20px"}} className="btn btn-outline-danger">Delete</button>
                    </form>
                </div>
                ) : null}
            </div>
        );
    }
}

export default Post;