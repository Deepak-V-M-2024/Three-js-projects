import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { doc, updateDoc } from 'firebase/firestore';

const EditUser = ({ currentUser, clearEdit }) => {
  const [name, setName] = useState(currentUser.name);
  const [email, setEmail] = useState(currentUser.email);

  const handleUpdate = async () => {
    const userRef = doc(db, "users", currentUser.id);
    await updateDoc(userRef, { name, email });
    clearEdit();
  };

  return (
    <div>
      <h3>Edit User</h3>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <button onClick={handleUpdate}>Update</button>
      <button onClick={clearEdit}>Cancel</button>
    </div>
  );
};

export default EditUser;
