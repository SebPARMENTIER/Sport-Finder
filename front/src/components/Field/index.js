// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './field.scss';

// == Composant
const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  className,
}) => {
  const handleChange = (evt) => {
    onChange(evt.target.value, name);
  };

  const inputId = `field-${name}`;
  const style = `inputs__field ${className}`;
  return (
    <div>
      <input
        required
        className={style}
        // React - state
        value={value}
        onChange={handleChange}
        // Basic informations
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
  className: PropTypes.string.isRequired,
};

Field.defaultProps = {
  value: '',
  type: '',
};

// == Export
export default Field;
