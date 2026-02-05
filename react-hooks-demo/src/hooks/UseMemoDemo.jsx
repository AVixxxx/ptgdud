import { useState, useMemo } from "react";

export default function UseMemoDemo() {
  const [number, setNumber] = useState(0);

  const doubled = useMemo(() => {
    console.log("Đang tính...");
    return number * 2;
  }, [number]);

  return (
    <div>
      <h2>useMemo</h2>
      <p>Số: {number}</p>
      <p>Gấp đôi: {doubled}</p>
      <button onClick={() => setNumber(number + 1)}>Tăng</button>
    </div>
  );
}
