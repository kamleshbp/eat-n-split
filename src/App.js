import { useState } from "react";
import BillForm from "./components/BillForm";
import FriendList from "./components/FriendList";

const initialFriends = [
  {
    name: "Clark",
    balance: 7,
    imageUrl: "https://i.pravatar.cc/48",
  },
  {
    name: "Sarah",
    balance: -20,
    imageUrl: "https://i.pravatar.cc/49",
  },
  {
    name: "Anthony",
    balance: 0,
    imageUrl: "https://i.pravatar.cc/50",
  },
];

export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [openFriend, setOpenFriend] = useState(null);

  function addFriend(friend) {
    setFriends([...friends, friend]);
  }

  function updateBalance(id, balance) {
    setFriends(
      friends.map((friend, i) =>
        i === id ? { ...friend, balance: friend.balance + balance } : friend
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
          friends={friends}
          openFriend={openFriend}
          onOpenFriend={setOpenFriend}
          updateBalance={updateBalance}
        />
      )}
    </div>
  );
}
