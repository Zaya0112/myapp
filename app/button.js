
  button = ({ text, type }) => {
  if (type == "first") {
    return <button>{text || "Primary"}</button>;
  }
  if (type == "second") {
    return (
      <button style={{ padding: "5px", backgroundColor: "yellow" }}>
        Secondary
      </button>
    );
  }
  return (
    <button style={{ padding: "16px", backgroundColor: "blue" }}>{text}</button>
  );
};
 