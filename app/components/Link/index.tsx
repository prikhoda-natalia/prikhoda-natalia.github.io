import React from 'react';
import { Link as ReactRouterLink } from 'react-router';

import s from './Link.module.scss';

type LinkProps = {
  href: string;
  target?: '_blank' | '_self';
  value: string;
};

const Link = ({ href, target = '_blank', value }: LinkProps) => (
  <ReactRouterLink className={s.this} to={href} target={target}>
    {value}
  </ReactRouterLink>
);

export default Link;
