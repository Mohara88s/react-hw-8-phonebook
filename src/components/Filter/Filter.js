import React from 'react';
import styles from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/contacts/contacts-actions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Form } from 'react-bootstrap';

const Filter = () => {
  const filter = useSelector(contactsSelectors.getFilter);
  const dispatch = useDispatch();
  const onChangeFilter = event =>
    dispatch(changeFilter(event.currentTarget.value));

  return (
    <Form className={styles.form} controlId="formBasicEmail">
      <Form.Label>Filter name</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter name"
        pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїҐґ ])?[a-zA-Zа-яА-ЯІіЇїҐґ]*)*$"
        title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ..."
        name="filter"
        required
        onChange={onChangeFilter}
        value={filter}
      />
    </Form>
  );
};

export default Filter;
