import React from 'react';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';
import { useSelector } from 'react-redux';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <nav className={styles.nav}>
      {isLoggedIn && (
        <NavLink to="/contacts" exact className={styles.link}>
          Phonebook
        </NavLink>
      )}

      <NavLink to="/info" exact className={styles.link}>
        Info
      </NavLink>
    </nav>
  );
};

export default Navigation;
