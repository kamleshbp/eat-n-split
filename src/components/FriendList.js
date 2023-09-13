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
        {friends.map((friend) => (
          <Friend
            friend={friend}
            openFriend={openFriend}
            onOpenFriend={onOpenFriend}
            key={friend.id}
          />
        ))}
      </ul>
      <AddFriend onAddFriend={onAddFriend} />
    </div>
  );
}
