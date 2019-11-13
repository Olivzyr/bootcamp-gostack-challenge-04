import React, { Component } from 'react';

class PostList extends Component {
  state = {
    posts: [
      'React',
      'React Native',
    ]
  };

  render() {
    return (
      <>
          <ul>
            {this.state.posts.map(post => <li key={post} id="posts">{post}</li>)}
          </ul>
      </>
    );
  };
}
export default PostList;