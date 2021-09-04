import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/contacts-operaions';
import { Button } from 'react-bootstrap';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.contact}>
      <div className={styles.contact__info}>
        <p className={styles.name}>{name}</p>
        <p className={styles.number}>{number}</p>
      </div>

      <Button
        variant="primary"
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </Button>
    </div>
  );
};
Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default Contact;
