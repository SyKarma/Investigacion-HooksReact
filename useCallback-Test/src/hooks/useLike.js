import { useState, useCallback } from 'react';

export function useLike(initialPosts) {
  const [posts, setPosts] = useState(initialPosts);

  
  const handleLike = useCallback((postId) => {
    setPosts(prevPosts =>
      prevPosts.map(post =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  }, []); 

  return { posts, handleLike };
}