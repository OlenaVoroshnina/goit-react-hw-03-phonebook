import React from 'react';
import PropTypes from 'prop-types';
import { Button, Item } from './ContactItem.styled';

const ContactItem = ({ data, onDeleteContact}) => {
    const { id, name, number } = data;
    return(
    <>
        <Item key={id}>{name}: {number}
        <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
        </Item>
    </>
    )
}
    

export default ContactItem;

ContactItem.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }),
    onDeleteContact: PropTypes.func.isRequired,
};