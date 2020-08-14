import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeholder,handleChange }) => (
    <input
          className='search'
          type='serach'
          placeholder={ placeholder}
          onChange={handleChange}
    />

);
