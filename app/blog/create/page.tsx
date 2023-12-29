"use client";
import { Button, TextField } from "@mui/material"
import { useState } from "react"
import { collection, addDoc, getFirestore } from "firebase/firestore";
import { app } from "@/app/firebase";


export default function Home() {
    const [title, setTitle] = useState('');
    const [Description, setDescription] = useState('');
    const [Date, setDate] = useState('');
    const db = getFirestore(app);

    return (
        <main>
            <h1>Create document from my website</h1>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",

                }}
            >
                <h1>{JSON.stringify({ title, Description, Date })}</h1>



                <TextField
                    label="Title"
                    variant="outlined"
                    onChange={(e) => {
                        setTitle(e.target.value);
                    }} />
                <TextField
                    label="Description"
                    variant="outlined"
                    onChange={(e) => {
                        setDescription(e.target.value);
                    }} />
                <TextField
                    label="Date"
                    variant="outlined"
                    onChange={(e) => {
                        setDate(e.target.value);
                    }} />

                <Button onClick={async () => {
                    await addDoc(collection(db, "blog"), {
                        title: "title",
                        Description: "Description",
                        Date: "Date"
                    });
                    console.log("")
                }}>Save to Firestore</Button>
               
              





            </div>
        </main>
    )
}