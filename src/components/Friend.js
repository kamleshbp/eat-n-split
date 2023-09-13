import Button from "./Button";

export default function Friend({ friend, openFriend, onOpenFriend }) {
  const { name, balance, imageUrl } = friend;
  let isOpen = friend.id === openFriend?.id;

  function handleClick() {
    onOpenFriend(friend.id === openFriend?.id ? null : friend);
  }

  return (
    <li>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      {/* <p className={balance < 0 ? "green" : balance > 0 ? "red" : ""}>
        {message}
      </p> */}
      {balance < 0 && (
        <p className="green">
          {name} owes you {Math.abs(balance)}$
        </p>
      )}
      {balance > 0 && (
        <p className="red">
          You owe {name} {balance}$
        </p>
      )}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onClick={handleClick}>{isOpen ? "Close" : "Select"}</Button>
    </li>
  );
}
