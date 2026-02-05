import { useState } from "react";

export default function UseStateDemo() {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <h2>useState</h2>
      <p>Số: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Tăng</button>
    </div>
  );
}
