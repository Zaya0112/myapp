"use client";
import { collection, getFirestore } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";

import { Logo } from "../components/logo";

import { app } from "../firebase";
import { Box } from "./box";
export default function Home() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(app), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "lightgray",
          fontFamily: "'Cabin',sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ marginLeft: "100px" }}>
            <Logo />
          </div>
          <p
            style={{
              fontSize: "48px",
              width: "246px",
              height: "60px",
              marginTop: "60px",
              marginLeft: "100px",
            }}
          >
            Blog posts
          </p>
          <p
            style={{
              fontSize: "18px",
              width: "480px",
              height: "29px",
              color: "#6D7D8B",
              marginLeft: "100px",
              marginTop: "20px",
            }}
          >
            Our latest updates and blogs about managing your team
          </p>
        </div>
        <div
          style={{
            display: "flex",

            marginTop: "100px",
            marginLeft: "136px",
            gap: "30px",
          }}
        >
          <main>
            {value?.docs.map((doc) => {
              return <Box value={doc.data()} key={doc.id} />;
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
