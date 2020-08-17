import React from 'react';

import profilePhoto from '../../assets/profile-photo.jpeg';

import './styles.css';

function PostHeader({ author, date }) {
  return (
    <>
      <header className="post-header">
        <img src={author.avatar} alt="Foto de perfil"/>
        <div className="post-info">
          <strong>{author.name}</strong>
          <p>{date}</p>
        </div>
      </header>
    </>
  );
}

function PostComments({ comments }) {
  return (
    <div className="post-comments">
      {comments.map(comment => (
        <div key={comment.id} className="comment">
        <img src={comment.author.avatar} alt="Avatar"/>
        <p>
          <strong>{comment.author.name}</strong>
          {comment.content}
        </p>
      </div>
      ))}
    </div>
  );
}

function PostItem({ author, date, content, comments }) {
  return (
    <section className="post">
      <PostHeader author={author} date={date}/>
      <main className="post-main">
        <p>{content}</p>
      </main>
      <PostComments comments={comments}/>
    </section>
  );
}

export default PostItem;
