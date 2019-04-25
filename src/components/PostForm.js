import React, { Component } from 'react'
import Axios from 'axios';


class PostForm extends Component {
  constructor(props){
    super(props);
    this.state={
        title:'',
        body:''
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }
  onChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  onSubmit(e){
    e.preventDefault();
    // const post={
    //   title: this.state.title,
    //   body: this.state.body
    // }
    Axios.post("https://jsonplaceholder.typicode.com/posts",
    {title: this.state.title,
      body: this.state.body}).then(res => 
        console.log(res.data));
      // this.setState({posts: [...this.state.posts, res.data]}));
  }
  render() {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit={this.onSubmit} >
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" onChange={this.onChange}
            value={this.state.title} />
          </div>
          <div>
            <label>Body:</label><br/>
            <textarea name="body" onChange={this.onChange} 
            value={this.state.body} />
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
export default PostForm;
