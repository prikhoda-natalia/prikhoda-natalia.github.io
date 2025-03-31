import React from 'react';
import classNames from 'classnames';
import s from './Tools.module.scss';
import type { ToolsType } from '~/types/ToolType';

type ToolsProps = {
  items: ToolsType;
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
        <li className={s.item} key={item.label}>
          <span className={s.label}>{item.label}</span>
          {item.version && <span className={s.version}>{item.version}</span>}
        </li>
      ))}
    </ul>
  );
};

export default Tools;
