import { useState } from 'react';
import { Button } from './Button';

export function FormAddFriend({ onAddFriend }) {
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

      <Button>Add</Button>
    </form>
  );
}
