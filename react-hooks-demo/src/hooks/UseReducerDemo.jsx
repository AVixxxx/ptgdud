import { useReducer } from "react";

function reducer(state, action) {
  if (action === "tang") return state + 1;
  return state;
}

export default function UseReducerDemo() {
  const [number, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h2>useReducer</h2>
      <p>Số: {number}</p>
      <button onClick={() => dispatch("tang")}>Tăng</button>
    </div>
  );
}
