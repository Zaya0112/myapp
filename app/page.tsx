import { BlueButton } from "./components/blue-button";
import { Button } from "./components/button";
import { EmailInput } from "./components/email-input";
import Image1 from "../public/image1.jpg";

const TitleAndDescription = ({ h2label, h1label }) => {
  return (
    <div>
      <h1 style={H1style}>{h1label}</h1>
      <h2 style={H2style}>{h2label}</h2>
    </div>
  );
};
const H1style = {
  weight: "400",
  fontSize: "48px",
};
const H2style = {
  fontSize: "18px",
  weight: "700",
};

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${Image1.src})`,
        height: "100vh",
        width: "100vw",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        color: "white",
      }}
    >
      <Button></Button>

      <TitleAndDescription
        h1label="Instant collaborations for remote teams"
        h2label="All in one for your remote team chats, collaboration and track projects"
      />
      <div style={{ display: "flex", gap: "14px" }}>
        <EmailInput />
        <BlueButton />
      </div>
    </main>
  );
}
