import React from 'react';
import LikeButton from '../LikeButton/likebutton';

const Post = React.memo(({ id, content, likes, onLike }) => {
  console.log(`Renderizando Post ${id}`); 
  return (
    <div className="post">
      <p>{content}</p>
      <LikeButton likes={likes} onLike={onLike} />
    </div>
  );
});

export default Post;