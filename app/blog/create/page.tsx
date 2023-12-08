"use client";
import { app } from "@/app/firebase";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

const db = getFirestore(app);

export default function Home() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  return (
    <main>
      <h1>Creat firebase document from my website</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          paddingLeft: "10px",
        }}
      >
        <h1>
          {JSON.stringify({
            title: title,
            description: description,
            name: name,
            date: date,
          })}
        </h1>

        <TextField
          id="outlined-error-helper-text"
          label="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-error-helper-text"
          label="Date"
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <Button
          variant="contained"
          onClick={async () => {
            await addDoc(collection(db, "blog"), {
              title: title,
              description: description,
              name: name,
              date: date,
            });
          }}
        >
          Save to Firestore
        </Button>
      </div>
    </main>
  );
}
