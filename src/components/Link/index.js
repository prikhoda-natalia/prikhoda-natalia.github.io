import React from 'react';
import PropTypes from 'prop-types';

import s from './Link.module.scss';

const Link = ({ href, target, value }) => (
  <a className={s.this} href={href} target={target}>
    {value}
  </a>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_blank', '_self']),
  value: PropTypes.string.isRequired
};

Link.defaultProps = {
  target: '_blank'
};

export default Link;
