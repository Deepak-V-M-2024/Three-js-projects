// components/Navbar/Navbar.jsx
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase';
import NavbarAuth from './NavbarAuth';
import NavbarDashboard from './NavbarDashboard';

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <nav style={styles.navbar}>
      {user ? <NavbarDashboard user={user} /> : <NavbarAuth />}
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '10px 20px',
    background: '#333',
    color: 'white',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
};

export default Navbar;
