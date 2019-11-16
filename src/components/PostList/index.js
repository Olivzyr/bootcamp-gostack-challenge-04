import React, { Component} from 'react';

import Post from '../Post/index';

import './styles.css';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Julio Alcantara",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/diego.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Lucas Sartori",
          avatar: "http://url-da-imagem.com/imagem.jpg"
        },
        date: "04 Jun 2019",
        content: "Eu sou feio demaisssssss?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "../assets/diego.png"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };



  render() {
    return (
      <div className="content">
        <div id="post">
          {this.state.posts.map(post => <Post key={post.id} data={post}/> )}
        </div>
      </div>

    );
  }
}

export default PostList;






