import React from 'react';
import './LikeButton.css'; 

const LikeButton = React.memo(({ likes, onLike }) => {
  console.log('Renderizando LikeButton'); 
  return (
    <button onClick={onLike} className="like-button">
      👍 {likes} Me gusta
    </button>
  );
});

export default LikeButton;