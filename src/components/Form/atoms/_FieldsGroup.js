import React from 'react';
import PropTypes from 'prop-types';

import s from '../Form.module.scss';

const _FieldsGroup = ({ children }) => (
  <div className={s.fieldsGroup}>
    {children.map((child, index) => (
      <div className={s.fieldsGroupItem} key={index}>
        {child}
      </div>
    ))}
  </div>
);

_FieldsGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default _FieldsGroup;
