import React from 'react';

import Field, { Field_Textarea } from '../index';

const TextareaField = props => (
  <Field {...props}>
    <Field_Textarea {...props} />
  </Field>
);

export default TextareaField;
