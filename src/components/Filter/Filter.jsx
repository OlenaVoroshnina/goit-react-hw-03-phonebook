import React from 'react';
import PropTypes from 'prop-types';
import { Label, Input } from '../ContactForm/ContactForm.styled';

const Filter = ({value, onChange }) => (
    <>
        <Label htmlFor="filter">Find contacts by name</Label>
        <Input id='filter' type="text" value={value} onChange = {onChange} />
    </>
    
);

export default Filter;

Filter.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};