import React, { useState } from 'react';
import AddUser from './components/AddUser';
import UserList from './components/UserList';
import EditUser from './components/EditUser';

function App() {
  const [editingUser, setEditingUser] = useState(null);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Firebase CRUD with React + Vite</h1>
      {editingUser ? (
        <EditUser currentUser={editingUser} clearEdit={() => setEditingUser(null)} />
      ) : (
        <>
          <AddUser />
          <UserList onEdit={setEditingUser} />
        </>
      )}
    </div>
  );
}

export default App;

