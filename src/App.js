import React from 'react';
import './App.css';

// components
import Post from './components/Post';

// hooks
import useForm from './hooks/useForm';
import usePost from './hooks/usePost';

function App() {
  const [num, setNum] = useForm(1);
  const post = usePost(num);

  return (
    <div className="App">
      <h1>{post ? `Post ${post.id} Loaded` : 'Loading Post...'}</h1>
      <form>
        <label>Post Number:</label>
        <input type="number" value={num} onChange={setNum} />
      </form>
      <br />
      {post && <Post post={post} />}
    </div>
  );
}

export default App;
