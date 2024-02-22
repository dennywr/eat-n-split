import { useState } from 'react';

const initialFriends = [
  {
    id: 118836,
    name: 'Clark',
    image: 'https://i.pravatar.cc/48?u=118836',
    balance: -7,
  },
  {
    id: 933372,
    name: 'Sarah',
    image: 'https://i.pravatar.cc/48?u=933372',
    balance: 20,
  },
  {
    id: 499476,
    name: 'Anthony',
    image: 'https://i.pravatar.cc/48?u=499476',
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriend] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriend([...friends, friend]);
    setShowAddFriend(false);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{`${showAddFriend ? 'close' : 'Add friend'}`}</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function Friend({ friend }) {
  return (
    <li>
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

      <Button>Select</Button>
    </li>
  );
}

function Button({ onClick, onAddFriend, children }) {
  return (
    <button className="button" onClick={onClick} onAddFriend={onAddFriend}>
      {children}
    </button>
  );
}

function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState('');
  const [imageUrl, setImageUrl] = useState('https://i.pravatar.cc/48');

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !imageUrl) return;

    const id = crypto.randomUUID();
    const newFriend = { name: friendName, image: `${imageUrl}?=${id}`, balance: 0, id };

    onAddFriend(newFriend);

    setFriendName('');
    setImageUrl('https://i.pravatar.cc/48');
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>🧑‍🤝‍🧑 Friend name</label>
      <input type="text" value={friendName} onChange={(e) => setFriendName(e.target.value)} />

      <label>🌅 Image URL</label>
      <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />

      <Button onAddFriend={onAddFriend}>Add</Button>
    </form>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with X</h2>

      <label>🤑 Bill value</label>
      <input type="text" />

      <label>👨‍💼 Your expense</label>
      <input type="text" />

      <label>🧑‍🤝‍🧑 X's expense</label>
      <input type="text" />

      <label>🤑 Who is playing the bill?</label>
      <input type="text" />

      <Button>Split bill</Button>
    </form>
  );
}
