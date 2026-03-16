import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        const data = await response.json();

        setPosts(data);          
        setFilteredPosts(data); 
      } catch (error) {
        console.error("Fetch error:", error);
      } 
    };

    fetchPosts();
  }, []);

  const handleSearch = (e) => {
    var value = e.target.value;
    setSearch(value);

    var filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredPosts(filtered);
  };


  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts List</h2>
      <input type="text" placeholder="Search by title..." value={search} onChange={handleSearch}/>

      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <b>{post.title}</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;