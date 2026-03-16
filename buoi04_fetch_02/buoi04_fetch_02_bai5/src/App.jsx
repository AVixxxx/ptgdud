import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API = "https://693255dae5a9e342d26ead36.mockapi.io/todos";

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setTodos(data);
      } catch {
        setError("Failed to load todos");
      }
    };

    fetchTodos();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();

    if (!title) return;

    setLoading(true);

    const tempTodo = {
      id: Date.now(),
      title,
      completed: false
    };

    setTodos([tempTodo, ...todos]);

    try {
      const res = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title,
          completed: false
        })
      });

      const newTodo = await res.json();

      setTodos((prev) =>
        prev.map((todo) =>
          todo.id === tempTodo.id ? newTodo : todo
        )
      );

      setTitle("");
    } catch {
      setError("Add failed");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${API}/${id}`, {
        method: "DELETE"
      });

      setTodos((prev) =>
        prev.filter((todo) => todo.id !== id)
      );
    } catch {
      setError("Delete failed");
    }
  };

  return (
    <div className="container">
      <h1>Todo App</h1>

      {error && <p className="error">{error}</p>}

      <form className="todo-form" onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Add new todo..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button disabled={loading}>
          {loading ? "Adding..." : "Add"}
        </button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            <span>{todo.title}</span>

            <button
              className="delete-btn"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;