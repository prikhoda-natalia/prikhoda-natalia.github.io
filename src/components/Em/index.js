import React from 'react';
import PropTypes from 'prop-types';

import s from './Em.module.scss';

const Em = ({ value }) => <em className={s.this}>{value}</em>;

Em.propTypes = {
  value: PropTypes.string.isRequired
};

export default Em;
