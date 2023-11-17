const Button = () => {
  return (<button
    style={{
      display: "flex",
      backgroundColor: "gray",
      padding: "16px",
      width: "128px",
      height: "56px",
      marginTop: "4px",

    }}
  >Get access
  </button>)
}
const EmailInput = ({ }) => {
  return (
    <div>
      <input style={EmailStyle} placeholder={"Email"} />
    </div>
  );
};
const EmailStyle = {
  border: "1px solid black",
  height: "56px",
  width: "317px",
  fontSize: "16px",
  fontFamily: "Mulish",
}
const TitleAndDescription = ({ h2label, h1label }) => {
  return (
    <div>
      <h1 style={H1style}>{h1label}</h1>
      <h2 style={H2style}>{h2label}</h2>
    </div>
  );
}
const H1style = {
  width: "514px",
  height: "120px",
  weight: "400",
  fontFamily: "Work Sans",
  size: "48px",
  marginTop: "252px",
  padding: "10px",

};
const H2style = {
  height: "58px",
  width: "323.85px",
  size: "18px",
  weight: "700",
  fontFamily: "Mulish",
};

export default function Home() {
  return (
    <main style={{ display: "flex", gap: "50px" }}>
      <Button></Button>
      <EmailInput></EmailInput>
      <TitleAndDescription h1label="Instant collaborations for remote teams"
        h2label="All in one for your remote team chats, collaboration and track projects"></TitleAndDescription>
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


