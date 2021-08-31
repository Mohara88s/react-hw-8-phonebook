import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/contacts" exact className={styles.link}>
      Phonebook
    </NavLink>
  </nav>
);

export default Navigation;
