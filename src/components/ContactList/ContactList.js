import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchContacts } from '../../redux/contacts/contacts-operaions';
import { useEffect } from 'react';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Spinner, ListGroup } from 'react-bootstrap';

const ContactList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  const error = useSelector(contactsSelectors.getError);
  const loading = useSelector(contactsSelectors.getLoading);
  const filtredContacts = useSelector(contactsSelectors.getFiltredContacts);
  return (
    <>
      {loading && (
        <Spinner
          className={styles.spinner}
          animation="border"
          variant="primary"
        />
      )}
      {error && <h2 className={styles.error}>{error}</h2>}
      <ListGroup className={styles.contactList}>
        {filtredContacts.map(({ id, name, number }) => (
          <ListGroup.Item key={id}>
            <Contact id={id} name={name} number={number} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default ContactList;
