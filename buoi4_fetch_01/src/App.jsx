import { useEffect, useState } from 'react'
import './App.css'

function App() {
   const [userId, setUserId] = useState("");
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  // useEffect(()=>{
  //   var url = "https://jsonplaceholder.typicode.com/users";
    
  //   fetch(url)
  //   .then((response) => {
  //     return response.json();
  //   }).then((data) => {
  //     setUser(data);
  //   })
  // }, [])

 useEffect(() => {

    if (!userId) return;

   
    if (userId < 1 || userId > 10) {
      setError("User not found");
      setUser(null);
      return;
    }

    const url = `https://jsonplaceholder.typicode.com/users/${userId}`;

    async function fetchData() {
      try {

        setLoading(true);
        setError(null);

        const res = await fetch(url);

        if (!res.ok) {
          throw new Error("User not found");
        }

        const data = await res.json();
        setUser(data);

      } catch (err) {
        setError(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();

  }, [userId]);

  return (
    <>
      <input
        type="number"
        placeholder="Nhập userId (1-10)"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <h2>{user.name}</h2>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      )}
    </>
  );
}

export default App

