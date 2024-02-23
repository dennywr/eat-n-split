import { useState } from 'react';
import { FriendList } from './FriendList';
import { Button } from './Button';
import { FormAddFriend } from './FormAddFriend';
import { FormSplitBill } from './FormSplitBill';

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
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddFriend() {
    setShowAddFriend((show) => !show);
  }

  function handleAddFriend(friend) {
    setFriends([...friends, friend]);
    setShowAddFriend(false);
  }

  function handleSelectedFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    handleShowAddFriend(false);
  }

  function handleSplitBill(value) {
    setFriends((friends) => friends.map((friend) => (friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend)));

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList friends={friends} selectedFriend={selectedFriend} onSelectedFriend={handleSelectedFriend} />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={handleShowAddFriend}>{`${showAddFriend ? 'close' : 'Add friend'}`}</Button>
      </div>
      {selectedFriend && <FormSplitBill friend={selectedFriend} onHandleSplitBill={handleSplitBill} />}
    </div>
  );
}
