import { useState } from "react";
import BillForm from "./components/BillForm";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    id: "85c94783-fc2b-407d-891b-0b040f21c35c",
    name: "Nirma",
    balance: 7,
    imageUrl: "https://i.pravatar.cc/48?85c94783-fc2b-407d-891b-0b040f21c35c",
  },
  {
    id: "c6c94097-9632-4b15-9be2-fbcb59abfbdc",
    name: "Harsh",
    balance: -20,
    imageUrl: "https://i.pravatar.cc/48?c6c94097-9632-4b15-9be2-fbcb59abfbdc",
  },
  {
    id: "65facf9c-faa6-4179-8573-36edf8cb1bf4",
    name: "Dhruv",
    balance: 0,
    imageUrl: "https://i.pravatar.cc/48?65facf9c-faa6-4179-8573-36edf8cb1bf4",
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openFriend, setOpenFriend] = useState(null);

  function addFriend(friend) {
    setFriends([...friends, friend]);
  }

  function updateBalance(balance) {
    setFriends(
      friends.map((friend) =>
        friend.id === openFriend.id
          ? { ...friend, balance: friend.balance + balance }
          : friend
      )
    );
  }

  return (
    <div className="app">
      <FriendList
        openFriend={openFriend}
        onOpenFriend={setOpenFriend}
        friends={friends}
        onAddFriend={addFriend}
      />
      {openFriend !== null && (
        <BillForm
          openFriend={openFriend}
          onOpenFriend={setOpenFriend}
          onUpdateBalance={updateBalance}
        />
      )}
    </div>
  );
}
