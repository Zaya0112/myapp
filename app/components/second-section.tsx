import Image from "next/image";
import { TitleAndDescription } from "./title-and-description";

export const SecondSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "#F5F7FA",
        padding: "100px 150px",
        fontSize: "48px",
        gap: "20px",
      }}
    >
      <div style={{ padding: "100px 130px", gap: "30px" }}>
        <TitleAndDescription
          h1label="Your Hub for teamwork"
          h2label="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          backgroundColor: "#F5F7FA",
          alignItems: "center",
          fontSize: "48px",
        }}
      >
        <Image
          style={{
            border: "1px",
          }}
          src="/first-pic.png"
          width={500}
          height={500}
          alt=""
        />
      </div>
    </div>
  );
};
