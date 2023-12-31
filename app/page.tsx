import Image1 from "../public/image1.jpg";
import { Logo } from "./components/logo";
import { BlueButton } from "./components/blue-button";
import { Button } from "./components/button";
import { EmailInput } from "./components/email-input";
import { NavigationItems } from "./components/navigation-items";
import { SecondSection } from "./components/second-section";
import { Star } from "./components/star";
import { TitleAndDescription } from "./components/title-and-description";

export default function Home() {
  return (
    <main>
      <div
        style={{
          backgroundImage: `url(${Image1.src})`,
          height: "100vh",
          width: "100vw",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          backgroundColor: "#F5F7FA",
        }}
      >
        <Logo/>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "30px",
            padding: "10px",
            fontSize: "18px",
          }}
        >
          <NavigationItems>Product</NavigationItems>
          <NavigationItems>Service</NavigationItems>
          <NavigationItems>Contacts</NavigationItems>
          <NavigationItems>Log In</NavigationItems>
          <Button></Button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginTop: "252px",
            width: "514px",
            height: "326px",
            top: "252px",
            paddingLeft: "124px",
            paddingRight: "120px",
          }}
        >
          <TitleAndDescription
            h1label="Instant collaborations for remote teams"
            h2label="All in one for your remote team chats, collaboration and track projects"
          />

          <div
            style={{
              display: "flex",
              marginTop: "55px",
              gap: "18px",
              color: "white",
            }}
          >
            <EmailInput />
            <BlueButton />
          </div>
        </div>
      </div>
      <SecondSection />
      <div>
        <p
          style={{
            alignItems: "center",
            fontSize: "48px",
            fontWeight: "615px",
            marginLeft: "350px",
            lineHeight: "61px",
          }}
        >
          What people say about us
        </p>

        <Star />
      </div>
     
    </main>
  );
}
