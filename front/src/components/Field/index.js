// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <div className="searchForm__inputs__div">
      <input
        className="searchForm__inputs__div__field"
        // React - state
        value={value}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}        
        placeholder={placeholder}
        name={name}
      />

    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

// == Export
export default Field;