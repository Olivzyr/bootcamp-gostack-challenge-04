import React, { Component } from 'react';

import Comment from '../Comment/index';

import './styles.css'


class Post extends Component {
    
  render() {
    const { data } = this.props;

    return (
      <div className="post">
        <div className="postContent">
          <div className="postHeader">
            <img src={data.author.avatar} alt={data.author.name}/>
            <div>
              <strong>{data.author.name}</strong>
              <span>{data.date}</span>
            </div>
          </div>
          <p>{data.content}</p>
        </div>
        
        {data.comments.map(comment => <Comment key={comment.id} data={comment}/> )}
      </div>
    );
  };
}
export default Post;