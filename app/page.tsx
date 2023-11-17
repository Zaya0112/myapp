const Button = () => {
  return (<button
    style={{
      display: "flex",
      backgroundColor: "gray",
      padding: "16px,"
    }}
  >Get access
  </button>)
}
export default function Home() {
  return (
    <main style={{ display: "flex", gap: "50px" }}>
      <Button></Button>
      <EmailInput></EmailInput>
      <button
        style={{
          display: "flex",
          justifyContent: "space between",
          backgroundColor: "#0BBEF2",
          width: "100px",
          height: "50px",
          gap: "20px",
        }}
      >
        Get early access
      </button>
    </main>
  );
}
const EmailInput = ({ }) => {
  return (
    <div>
      <input style={EmailStyle}
        placeholder={"Email"} />
    </div>
  );
};
const EmailStyle = {
  border: "1px solid white",
  width: "310px",
  height: "56px",
};

  