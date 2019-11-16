import React, { Component } from 'react';

import './styles.css'


class Comment extends Component {
  render() {
    const { data } = this.props;

    return (
      <div id="comments">
        <img src={data.author.avatar} id="avatar"/>
        <div id="author">
          <p>{data.author.name}</p>
          <p>{data.content}</p>
        </div>
      </div>

    );
  }

}

export default Comment;