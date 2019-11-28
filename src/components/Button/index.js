import React from 'react';
import PropTypes from 'prop-types';

import s from './Button.module.scss';

const Button = ({ download, href, type, value }) => {
  const Tag = type ? 'button' : 'a';

  return (
    <Tag className={s.this} download={download} href={href} type={type}>
      {value}
    </Tag>
  );
};

Button.propTypes = {
  download: PropTypes.bool,
  href: PropTypes.string,
  type: PropTypes.oneOf([null, 'button', 'submit']),
  value: PropTypes.string.isRequired
};

Button.defaultProps = {
  download: false,
  href: undefined,
  type: null
};

export default Button;
