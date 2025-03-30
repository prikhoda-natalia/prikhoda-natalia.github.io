import React from 'react';

import s from './List.module.scss';

type ListProps = {
  items: Array<string>;
};

const List = ({ items }: ListProps) => (
  <ul className={s.this}>
    {items.map(item => (
      <li className={s.item} key={item}>
        {item}
      </li>
    ))}
  </ul>
);

export default List;
