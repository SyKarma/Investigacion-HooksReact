import { useLike } from './hooks/useLike';
import Post from './components/post/post';

function App() {
  const initialPosts = [
    { id: 1, content: "post 1", likes: 0 },
    { id: 2, content: "post 2", likes: 0 },
  ];

  const { posts, handleLike } = useLike(initialPosts);

  return (
    <div className="content">
      <h1>Callback test</h1>
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          content={post.content}
          likes={post.likes}
          onLike={() => handleLike(post.id)}
        />
      ))}
    </div>
  );
}

export default App;