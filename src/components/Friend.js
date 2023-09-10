import Button from "./Button";

export default function Friend({
  friend,
  openFriend,
  onOpenFriend,
  updateBalance,
  id,
}) {
  const { name, balance, imageUrl } = friend;
  let isOpen = id === openFriend;
  let message = "";

  function handleClick() {
    isOpen = !isOpen;
    onOpenFriend(id === openFriend ? null : id);
  }

  if (balance < 0) {
    message = `${name} owes you ${Math.abs(balance)}$`;
  } else if (balance > 0) {
    message = `You owe ${name} ${balance}$`;
  } else {
    message = `You and ${name} are even`;
  }
  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <p className={balance < 0 ? "green" : balance > 0 ? "red" : ""}>
        {message}
      </p>
      <Button onClick={handleClick}>{isOpen ? "Close" : "Select"}</Button>
    </li>
  );
}
