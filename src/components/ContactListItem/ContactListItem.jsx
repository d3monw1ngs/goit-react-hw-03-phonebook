import { Component } from 'react';
import css from './ContactListItem.module.css';
import PropTypes from 'prop-types';


export class ContactListItem extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired,
    onDelete: PropTypes.func.isRequired,
  };

  componentWillUnmount() {
    console.log('componentWillUnmount()');
  }

  render() {
    const { contact, onDelete } = this.props;

    return (
      <li className={css.contactItem}>
      <div className={css.contactDetails}>
        <span className={css.contactName}>{contact.name}</span>:{" "}
        <span className={css.contactNumber}>{contact.number}</span>     
    </div>
    <button className={css.deleteBtn} onClick={onDelete}>
      Delete
    </button>
  </li>
    );
  }
}
    

