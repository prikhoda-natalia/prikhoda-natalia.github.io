import React from 'react';
import PropTypes from 'prop-types';

import s from './ListCollection.module.scss';

const ListCollection = ({ items }) => (
  <ul className={s.this}>
    {items.map(item => (
      <li className={s.item} key={item}>
        {item}
      </li>
    ))}
  </ul>
);

ListCollection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ListCollection;
