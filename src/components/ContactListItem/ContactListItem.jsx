import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ contact, onDelete }) => {
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
};

ContactListItem.propTypes = {
    contact: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        }).isRequired,
    onDelete: PropTypes.func.isRequired,
};
