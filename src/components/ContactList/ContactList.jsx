import React from 'react'
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem/ContactItem';
import { List } from 'components/ContactItem/ContactItem.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
    <List>{
        contacts.map(contact => {
            return (
                <ContactItem data={contact} key={contact.id} onDeleteContact={ onDeleteContact} />  
            )
        })
    }

    </List>
)
export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        contact: PropTypes.object,
    })),
    onDeleteContact: PropTypes.func,
};