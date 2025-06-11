// components/Navbar/NavbarAuth.jsx
import React from 'react';

const NavbarAuth = () => {
  return (
    <div style={styles.links}>
      <span style={styles.logo}>MyApp</span>
      <div>
        <button style={styles.btn}>Login</button>
        <button style={styles.btn}>Sign Up</button>
      </div>
    </div>
  );
};

const styles = {
  links: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  logo: {
    fontWeight: 'bold',
    fontSize: '1.2rem'
  },
  btn: {
    marginLeft: '10px',
    padding: '5px 10px',
    background: '#555',
    color: 'white',
    border: 'none',
    cursor: 'pointer'
  }
};

export default NavbarAuth;
