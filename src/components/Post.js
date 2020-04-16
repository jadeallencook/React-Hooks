import React from 'react';

const Post = (props) => {
  const { title, body } = props.post;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Post;
