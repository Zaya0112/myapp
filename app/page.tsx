import { Button } from "./components/button";
import { EmailInput } from "./components/email-input";
import Image1 from "../public/image1.jpg";
import { BlueButton } from "./components/blue-button";
import { NavigationItems } from "./components/navigation-items"
import { TitleAndDescription } from "./components/title-and-description";
import Image from "next/image";
import { Star } from "./components/star";
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
          backgroundColor:"#F5F7FA"

        }}
      >
        <div style={{
          display: "flex",
          justifyContent: "flex-end",
          gap: "30px",
          padding: "10px",
          fontSize: "18px",
        }
        }>

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
          <div style={{
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
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F5F7FA",
        padding: "100px 150px",
        fontSize: "48px",
        gap: "20px"



      }}>
        <div style={{ padding: "100px 130px", gap: "30px" }}>
          <TitleAndDescription
            h1label="Your Hub for teamwork"
            h2label="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
          />
        </div>
        <div style={{
          display: "flex", justifyContent: "flex-end",
          backgroundColor: "#F5F7FA",
          alignItems: "center",
          fontSize: "48px",
        }}
        >

          <Image style={{
            border: "1px",
          }}

            src="/first-pic.png"
            width={500}
            height={500}

            alt=""
          />
          <Image style={{
            position: "absolute",
            top: "960px",
            left: "850px",
          }
          }
            src="/event 1.png"
            width={263}
            height={130}
            alt=""
          />
          <Image style={{
            position: "absolute",
            top: "1250px",
            left: "920px",
          }
          }
            src="/Group 10.png"
            width={120}
            height={95}
            alt=""
          />
        </div>

      </div>
      <div style={{
        display: "flex",
        alignItems: "center",

        gap: "150px",
        backgroundColor: "#F5F7FA",
      }}>
        <Image
          src="/image3.png"
          width={567}
          height={562}
          alt="" />
        <div>

          <h1 style={{ fontSize: "48px", width: "398px", height: "120px", display: "flex", flexDirection: "column" }}>
            Simple task management
          </h1>

          <p style={{ fontSize: "18px", width: "465px", height: "145px", }}>
            "Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."</p>
          <a
            style={{
              fontSize: "16px",
              width: "87px",
              height: "28px",
              display: "flex",
              alignItems: "center",

            }}
            href="/"
          >

          </a>
        </div>

      </div>
      <div>
        <p style={{
        
          alignItems: "center",
          fontSize: "48px",
          fontWeight: "615px",
          marginLeft: "350px",
          lineHeight: "61px",
        }}
        >
          What people say about us
        </p>
        <div
          style={{
            backgroundColor: "gray",
            width:"366px",
            height:"374px",
            marginLeft:"141px",
          }}
        
          >
          <Star />
        </div>
      </div>
    </main >
  );
}


