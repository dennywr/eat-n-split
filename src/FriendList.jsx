import { Friend } from './Friend';

export function FriendList({ friends, selectedFriend, onSelectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} selectedFriend={selectedFriend} onSelectedFriend={onSelectedFriend} key={friend.id} />
      ))}
    </ul>
  );
}
