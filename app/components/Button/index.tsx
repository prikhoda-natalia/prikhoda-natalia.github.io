import React from 'react';

import s from './Button.module.scss';

type ButtonProps = {
  download?: boolean;
  href?: string;
  type?: 'button' | 'submit';
  value: string;
};

const Button = ({ download, href, type, value }: ButtonProps) => {
  const Tag = type ? 'button' : 'a';

  return (
    <Tag className={s.this} download={download} href={href} type={type}>
      {value}
    </Tag>
  );
};

export default Button;
