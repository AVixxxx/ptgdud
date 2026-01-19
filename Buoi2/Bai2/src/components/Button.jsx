import "./Button.css";

function Button({ type }) {
  const className = `btn btn-${type}`;

  return (
    <button className={className}>
      Button
    </button>
  );
}

export default Button;
