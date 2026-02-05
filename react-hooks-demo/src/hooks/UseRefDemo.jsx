import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();

  return (
    <div>
      <h2>useRef</h2>
      <input ref={inputRef} placeholder="Nhập gì đó..." />
      <button onClick={() => inputRef.current.focus()}>
        Focus input
      </button>
    </div>
  );
}
