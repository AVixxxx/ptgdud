import { useState, useCallback } from "react";

export default function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const sayHello = useCallback(() => {
    alert("Xin chào!");
  }, []);

  return (
    <div>
      <h2>useCallback</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Tăng</button>
      <button onClick={sayHello}>Chào</button>
    </div>
  );
}
