import React, { Component } from 'react'

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {posts:[]};
    }
    componentDidMount() {
        fetch('https://63062aa3c0d0f2b801173742.mockapi.io/dchart').then(res=>res.json()).then(res=>this.setState({posts:res}))
    }
  render() {
    return (
      <div>
        {this.state.posts.map(post =><div key={post.id}>{post.id}{post.sold}{post.amt}</div>)}
      </div>
    );
  }
}


