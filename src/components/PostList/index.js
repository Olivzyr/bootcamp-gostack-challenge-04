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
          avatar: "./images/julio.png"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "./images/diego.png"
            },
            content: "A Rocketseat está sempre em busca de novos membros para o time, e geralmente ficamos de olho em quem se destaca no Bootcamp, inclusive 80% do nosso time de devs é composto por alunos do Bootcamp. Além disso, se você tem vontade de ensinar gravando vídeos e criando posts, pode me chamar no Discord! (Sério, me chamem mesmo, esse comentário é real)"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Lucas Sartori",
          avatar: "./images/julio.png"
        },
        date: "04 Jun 2019",
        content: "Eu sou feio demaisssssss?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "./images/diego.png"
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
        <div id="postlist">
          {this.state.posts.map(post => <Post key={post.id} data={post}/> )}
        </div>
      </div>

    );
  }
}

export default PostList;






