import React from 'react';
import PropTypes from 'prop-types';

import s from '../Field.module.scss';

const _Textarea = ({ inputId, isRequired, name, value }) => (
  <textarea
    className={s.textarea}
    defaultValue={value}
    id={inputId}
    name={name}
    required={isRequired}
  ></textarea>
);

_Textarea.propTypes = {
  inputId: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string
};

_Textarea.defaultProps = {
  isRequired: false,
  value: ''
};

export default _Textarea;
