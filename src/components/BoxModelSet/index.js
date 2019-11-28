import React from 'react';
import classNames from 'classnames';
import { Link } from 'gatsby';

import routes from '../../routes';
import messages from './messages';
import s from './BoxModelSet.module.scss';

const BoxModelSet = () => (
  <div className={s.this}>
    <div className={s.wrapper}>
      <Link className={classNames(s.box, s.box_size)} to={routes.portfolio}>
        {messages.portfolio}
      </Link>
      <Link className={classNames(s.box, s.box_padding)} to={routes.skillset}>
        {messages.skillset}
      </Link>
      <Link className={classNames(s.box, s.box_border)} to={routes.experience}>
        {messages.experience}
      </Link>
      <Link className={classNames(s.box, s.box_margin)} to={routes.contacts}>
        {messages.contacts}
      </Link>
    </div>
  </div>
);

export default BoxModelSet;
