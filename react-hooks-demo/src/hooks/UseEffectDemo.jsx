import { useState, useEffect } from "react";

export default function UseEffectDemo() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log("Số thay đổi:", number);
  }, [number]);

  return (
    <div>
      <h2>useEffect</h2>
      <p>Số: {number}</p>
      <button onClick={() => setNumber(number + 1)}>Tăng</button>
    </div>
  );
}
