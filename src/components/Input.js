// Input.js
import React from 'react';

// We also Ensure the Input component correctly handles the handleChange function

function Input({ handleChange, value, title, name, color }) {
  return (
    <label className='sidebar-label-container'>
      <input
        onChange={handleChange}
        type='radio'
        name={name}
        value={value}
      />
      <span className='checkmark' style={{ backgroundColor: color }}></span>
      {title}
    </label>
  );
}

export default Input;
