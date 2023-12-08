"use client";
import { NavigationBar } from "../components/navigationBar";

export default function Home() {
  const array = [
    {
      title: "The Emotional Toll of Being in UX",
      description:
        "There are times when our work impacts us deeply — sometimes in ways we neither acknowledge nor understand",
      ImageUrl: "/blog1.png",
      avatarImage: "/blogWade.png",
      blogReviewname: "Wade Warren",
      date: "2nd November, 2023",
    },
  ];
  return (
    <div style={{ backgroundColor: "lightgrey" }}>
      <NavigationBar />

      <div style={{ display: "flex", flexDirection: "column" }}>
        <p
          style={{
            fontSize: "48px",
            width: "246px",
            height: "60px",
            top: "160px",
            left: "140px",
          }}
        >
          Blog posts
        </p>
        <p
          style={{
            fontSize: "18px",
            width: "480px",
            height: "29px",
            top: "240px",
            left: "140px",
          }}
        >
          Our latest updates and blogs about managing your team
        </p>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <main>
          <div
            style={{
              display: "flex",
              width: "80vw",
              height: "200vh",
              backgroundColor: "#d3d3d3",
              flexWrap: "wrap",
              gap: "60px",
            }}
          ></div>
          {array.map((object) => {
            return <div></div>;
          })}
        </main>
      </div>
    </div>
  );
}
