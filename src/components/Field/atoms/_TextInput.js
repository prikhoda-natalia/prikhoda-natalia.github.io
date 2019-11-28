import React from 'react';
import PropTypes from 'prop-types';

import s from '../Field.module.scss';

const _TextInput = ({ inputId, isRequired, name, type, value }) => (
  <input
    type={type}
    className={s.textInput}
    defaultValue={value}
    id={inputId}
    name={name}
    required={isRequired}
  />
);

_TextInput.propTypes = {
  inputId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['email', 'text']).isRequired,
  value: PropTypes.string
};

_TextInput.defaultProps = {
  isRequired: false,
  type: 'text',
  value: ''
};

export default _TextInput;
