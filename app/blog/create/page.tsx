"use client";
import { app } from "@/app/firebase";
import { Button, TextField } from "@mui/material";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { ChangeEventHandler, useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("");
  const [blogName, setBlogName] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [background, setBackground] = useState<File>();
  const [avatar, setAvatar] = useState<File>();
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const storage = getStorage(app);

  const handleCreatePost = async () => {
    setLoading(true);
    const file1 = ref(storage, background?.name);
    const file2 = ref(storage, avatar?.name);
    await uploadBytes(file1, background as Blob);
    await uploadBytes(file2, avatar as Blob);
    const backgroundUrl = await getDownloadURL(file1);
    const avatarUrl = await getDownloadURL(file2);
    await addDoc(collection(db, "blog"), {
      title: title,
      description: description,
      date: date,
      blogReviewName: blogName,
      imageUrl: backgroundUrl,
      avatarImage: avatarUrl,
    });
    setLoading(false);
  };
  const handleTitleChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setTitle(e.target.value);
  const handleBlogNameChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setBlogName(e.target.value);
  const handleDescriptionChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDescription(e.target.value);
  const handleDateChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setDate(e.target.value);
  const handleBackgroundChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setBackground(e.target.files![0]);
  const handleAvatarChange: ChangeEventHandler<HTMLInputElement> = (e) =>
    setAvatar(e.target.files![0]);
  return (
    <main>
      <h1>Create document from my website</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TextField
          label="Title"
          variant="outlined"
          onChange={handleTitleChange}
        />
        <TextField
          label="Description"
          variant="outlined"
          onChange={handleDescriptionChange}
        />
        <TextField
          label="Date"
          variant="outlined"
          onChange={handleDateChange}
        />
        <TextField
          label="Blog Review Name"
          variant="outlined"
          onChange={handleBlogNameChange}
        />
        <input type="file" onChange={handleBackgroundChange} />
        <input type="file" onChange={handleAvatarChange} />

        <Button disabled={loading} onClick={handleCreatePost}>
          {loading ? "Loading..." : "Save to Firestore"}
        </Button>
      </div>
    </main>
  );
}
