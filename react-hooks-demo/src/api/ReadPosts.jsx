import { useState } from "react";

export default function ReadPosts() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
    const data = await res.json();
    setPosts(data);
  };

  return (
    <div>
      <h2>Read Posts</h2>
      <button onClick={getPosts}>Lấy danh sách bài viết</button>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
