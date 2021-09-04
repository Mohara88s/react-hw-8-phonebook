import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import styles from './ContactForm.module.css';
import { connect } from 'react-redux';
import { addContact } from '../../redux/contacts/contacts-operaions';
import contactsSelectors from '../../redux/contacts/contacts-selectors';
import { Form, Button } from 'react-bootstrap';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  hendelInputChange = event => {
    this.setState({ [event.currentTarget.name]: event.currentTarget.value });
  };
  hendelSubmit = event => {
    event.preventDefault();

    const isAvailable = this.props.contacts.some(
      contactItem =>
        contactItem.name.toLowerCase() === this.state.name.toLowerCase(),
    );
    if (isAvailable) {
      alert(`${this.state.name} is already in contacts.`);
      this.setState({
        name: '',
        number: '',
      });
      return;
    }

    const newContact = {
      id: uuidv4(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.onAddContact(newContact);
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <Form className={styles.form} onSubmit={this.hendelSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            pattern="^[a-zA-Zа-яА-ЯІіЇїҐґ]+(([' -][a-zA-Zа-яА-ЯІіЇїҐґ ])?[a-zA-Zа-яА-ЯІіЇїҐґ]*)*$"
            title="The name can only consist of letters, apostrophes, dashes and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan ..."
            name="name"
            required
            onChange={this.hendelInputChange}
            value={this.state.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Enter number"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.hendelInputChange}
            value={this.state.number}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add contact
        </Button>
      </Form>
    );
  }
}
ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});
const mapDispatchToProps = dispatch => ({
  onAddContact: contact => dispatch(addContact(contact)),
});
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
