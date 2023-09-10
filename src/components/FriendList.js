import AddFriend from "./AddFriend";
import Friend from "./Friend";

export default function FriendList({
  friends,
  onAddFriend,
  openFriend,
  onOpenFriend,
}) {
  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend, i) => (
          <Friend
            openFriend={openFriend}
            onOpenFriend={onOpenFriend}
            friend={friend}
            id={i}
            key={i}
          />
        ))}
      </ul>
      <AddFriend onAddFriend={onAddFriend} />
    </div>
  );
}
