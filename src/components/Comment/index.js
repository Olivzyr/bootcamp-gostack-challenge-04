import React, { Component } from 'react';

import './styles.css'


class Comment extends Component {
  render() {
    const { data } = this.props;

    return (
      <div className="comments">
        <img src={data.author.avatar} id="avatar"/>
        <div className="author">
          <p><span>{data.author.name} </span>{data.content}</p>
        </div>
      </div>

    );
  }

}

export default Comment;