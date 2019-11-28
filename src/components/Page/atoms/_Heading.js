import React from 'react';
import PropTypes from 'prop-types';

import s from '../Page.module.scss';

const _Heading = ({ value }) => (
  <h1 className={s.heading}>
    <span className={s.title}>{value}</span>
  </h1>
);

_Heading.propTypes = {
  value: PropTypes.string.isRequired
};

export default _Heading;
