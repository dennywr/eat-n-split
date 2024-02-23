import { Button } from './Button';

export function Friend({ friend, selectedFriend, onSelectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;
  return (
    <li className={isSelected ? 'selected' : ''}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {friend.balance}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you {friend.balance}$
        </p>
      )}
      {friend.balance === 0 && <p> You and {friend.name} are even</p>}

      <Button onClick={() => onSelectedFriend(friend)}>{isSelected ? 'Close' : 'Select'}</Button>
    </li>
  );
}
