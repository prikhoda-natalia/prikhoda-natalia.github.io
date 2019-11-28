import React from 'react';

import Field, { Field_TextInput } from '../index';

const TextInputField = props => (
  <Field {...props}>
    <Field_TextInput {...props} />
  </Field>
);

export default TextInputField;
