import { useState, useEffect } from 'react';

export default (num) => {
  const [post, setPost] = useState(null);
  useEffect(() => {
    if (num > 0 && num < 100) {
      setPost(null);
      fetch(`https://jsonplaceholder.typicode.com/posts/${num}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    }
  }, [num]);
  return post;
};
