import React from 'react';
import classNames from 'classnames';
import s from './Tools.module.scss';

type ToolsProps = {
  items: Array<string>;
  theme?: 'dark' | 'light';
};

const Tools = ({ items, theme = 'dark' }: ToolsProps) => {
  const thisClass = classNames({
    [s.this]: true,
    [s[`this_${theme}`]]: true
  });
  return (
    <ul className={thisClass}>
      {items.map(item => (
        <li className={s.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Tools;
