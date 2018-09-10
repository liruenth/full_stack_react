import React, { Component } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
var inputFuncs = require('../helper-functions/inputFuncs');


class UpdateBlog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            subtitle: '',
            comImage: '',
            blog: '',
        }
    }
    
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    submit = () => {

        let data = {
            blogTitle: this.state.titlee,
            blogSubtitle: this.state.subtitle,
            comImage: this.state.comImage,
            blog: this.state.blog,
        }

        this.setState({
            title: '',
            subtitle: '',
            comImage: '',
            blog: '',
        });

        // $.post('addNewBlog', {data:data})
        // .then((addedBlog) => {
        //     console.log(addedBlog);
        //     this.setState({
        //         title: '',
        //         subtitle: '',
        //         comImage: '',
        //         blog: '',
        //     });
        //     //CKEDITOR.instances.myEditor.setData("");
        // });
    };

    render() {
    return (
        <div style = {{backgroundColor:`lightgray`}}>
            <div className="container">
                <form style={{marginTop:"40px"}}>
                    <h1 style={{textAlign:"center"}}>Edit Blog</h1>
                <div className="form-group">
                    <label hrmlfor="bTitle">Blog Title</label>
                    <input name="title" type="text" className="form-control" id="bTitle" placeholder="Blog Title" 
                        value={this.state.title} onChange={(e) => inputFuncs.handleInputChange(e, this)} 
                    />
                </div>
                <div className="form-group">
                    <label hrmlfor="bSubtitle">Blog Subtitle</label>
                    <input name="subtitle" type="text" className="form-control" id="bSubtitle" placeholder="Blog Subtitle" 
                        value={this.state.subtitle} onChange={(e) => inputFuncs.handleInputChange(e, this)} 
                    />
                </div>
                <div className="form-group">
                    <label hrmlfor="bImage">Blog Commercial Image URL</label>
                    <input name="comImage" type="text" className="form-control" id="bImage"  placeholder="Blog Commercial Image URL" 
                        value={this.state.comImage} onChange={(e) => inputFuncs.handleInputChange(e, this)} 
                    />
                </div>
                <CKEditor 
                    editor={ ClassicEditor }
                    data={this.state.blog}
                    onChange={ (event, editor) =>{
                        this.setState({blog: editor.getData()});
                    } }
                    
                    onInit={ editor => {
                        
                    } }
                />
                </form>
                <button onClick={this.submit} id="myButton" className="btn btn-primary">Submit</button>
            </div>
        </div>
    );
  }
}
export default UpdateBlog;