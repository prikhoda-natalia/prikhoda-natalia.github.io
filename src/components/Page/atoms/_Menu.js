import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import s from '../Page.module.scss';

const _Menu = ({ items }) => {
  return (
    <ul className={s.menu}>
      {items.map(item => (
        <li className={s.menuItem} key={item.label}>
          <Link activeClassName={s.menuLink_active} className={s.menuLink} to={item.to}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

_Menu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired
    })
  ).isRequired
};

export default _Menu;
