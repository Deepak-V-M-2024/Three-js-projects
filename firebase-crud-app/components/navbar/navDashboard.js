// components/Navbar/NavbarDashboard.jsx
import React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const NavbarDashboard = ({ user }) => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div style={styles.container}>
      <span style={styles.logo}>MyApp</span>
      <div>
        <span style={styles.user}>Hi, {user.email}</span>
        <button style={styles.btn} onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  user: {
    marginRight: '10px'
  },
  btn: {
    padding: '5px 10px',
    background: '#d33',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default NavbarDashboard;
