import React from 'react';
import PropTypes from 'prop-types';

import s from './Field.module.scss';

const Field = ({ children, inputId, label }) => (
  <div className={s.this}>
    <label htmlFor={inputId} className={s.label}>
      {label}
    </label>
    <div className={s.inputWrapper}>{children}</div>
  </div>
);

Field.propTypes = {
  children: PropTypes.node.isRequired,
  inputId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export { default as Field_Textarea } from './atoms/_Textarea';
export { default as Field_TextInput } from './atoms/_TextInput';
export { default as TextareaField } from './states/TextareaField';
export { default as TextInputField } from './states/TextInputField';
export default Field;
