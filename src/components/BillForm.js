import { useState } from "react";
import Button from "./Button";

export default function BillForm({
  friends,
  openFriend,
  onOpenFriend,
  updateBalance,
}) {
  const [bill, setBill] = useState("");
  const [yourExpanse, setYourExpanse] = useState("");
  const [paidByYou, setPaidByYou] = useState("true");
  const otherExpanse = bill - yourExpanse || "";
  const friend = friends.find((friend, i) => i === openFriend);

  function reset() {
    setBill("");
    setYourExpanse("");
    setPaidByYou("true");
  }

  function handleSubmit(e) {
    e.preventDefault();
    updateBalance(
      openFriend,
      paidByYou === "true" ? -otherExpanse : yourExpanse
    );
    reset();
    onOpenFriend(null);
  }

  return (
    <form className="form form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {friend.name}</h2>
      <label>💰 Bill value</label>
      <input
        name="bill"
        type="Number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label>🧍‍♀️ Your expense</label>
      <input
        name="expanse"
        type="Number"
        value={yourExpanse}
        onChange={(e) => {
          if (Number(e.target.value) <= bill)
            setYourExpanse(Number(e.target.value));
        }}
      />
      <label>👫 {friend.name}'s expense</label>
      <input type="Number" value={otherExpanse} disabled />
      <label>🤑 Who is paying the bill</label>
      <select
        value={paidByYou}
        name={paidByYou}
        onChange={(e) => setPaidByYou(e.target.value)}
      >
        <option value="true">You</option>
        <option value="false">{friend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
