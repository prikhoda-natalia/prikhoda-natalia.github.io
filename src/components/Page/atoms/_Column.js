import React from 'react';
import PropTypes from 'prop-types';
import s from '../Page.module.scss';

const _Column = ({ children }) => <section className={s.column}>{children}</section>;

_Column.propTypes = {
  children: PropTypes.node.isRequired
};

export default _Column;
