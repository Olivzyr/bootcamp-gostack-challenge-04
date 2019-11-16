import React, { Component } from 'react';

import Comment from '../Comment/index';

import './styles.css'


class Post extends Component {
    
  render() {
    const { data } = this.props;

    return (
      <div id="post">
        <p>{data.author.name}</p>
        <p>{data.date}</p>
        <p>{data.content}</p>
        {data.comments.map(comment => <Comment key={comment.id} data={comment}/> )}
      </div>
    );
  };
}
export default Post;