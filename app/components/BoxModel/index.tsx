import React from 'react';
import classNames from 'classnames';

import s from './BoxModel.module.scss';
import { Link } from 'react-router';
import { appPaths } from '~/routes';

const BoxModelSet = () => (
  <div className={s.this}>
    <div className={s.wrapper}>
      <Link className={classNames(s.box, s.box_size)} to={appPaths.portfolio}>
        Portfolio
      </Link>
      <Link className={classNames(s.box, s.box_padding)}  to={appPaths.skillset}>
        Skillset
      </Link>
      <Link className={classNames(s.box, s.box_border)}  to={appPaths.experience}>
        Experience
      </Link>
      <Link className={classNames(s.box, s.box_margin)}  to={appPaths.contacts}>
        Contacts
      </Link>
    </div>
  </div>
);

export default BoxModelSet;
