import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <NavLink to="/register" exact className={styles.link}>
        Registation
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeStyle={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
}
