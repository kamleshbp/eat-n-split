import { useState } from "react";
import Button from "./Button";

export default function AddFriend({ onAddFriend }) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function addFriend(e) {
    e.preventDefault();

    if (!name || !imageUrl) return;

    const id = crypto.randomUUID();
    const friend = {
      id,
      name,
      imageUrl: imageUrl + `?${id}`,
      balance: 0,
    };
    onAddFriend(friend);
    handleClick();
  }

  if (!isOpen) return <Button onClick={handleClick}>Add friend</Button>;
  return (
    <>
      <form className="form form-add-friend" onSubmit={addFriend}>
        <label>👫Friend name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label>🌄 Image URL</label>
        <input
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Button>Add</Button>
      </form>
      <Button onClick={handleClick}>Close</Button>
    </>
  );
}
