import React, { Component } from 'react';

import './styles.css'


class Comment extends Component {
  render() {
    const { data } = this.props;

    return (
      <div>
        <p>{data.author.name}</p>
        <p>{data.content}</p>
      </div>
    );
  }

}

export default Comment;