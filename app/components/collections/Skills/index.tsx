import React from 'react';

import Tools from '../Tools';

import s from './Skills.module.scss';
import type { SkillsType } from '~/types/SkillType';

type SkillsProps = {
  items: SkillsType;
};

const Skills = ({ items }: SkillsProps) => (
  <div className={s.this}>
    {items.map((item, index) => {
      let number = index < 9 ? '0' : '';
      number = `${number}${index + 1}`;
      return (
        <article className={s.item} key={item.title}>
          <header className={s.header}>
            <div className={s.index}>{number}</div>
            <h3 className={s.title}>{item.title}</h3>
          </header>
          <div className={s.blurb}>{item.blurb}</div>
          <dl className={s.tools}>
            <dt className={s.toolsLabel}>Technologies</dt>
            <dd className={s.toolsValue}>
              <Tools items={item.tools} />
            </dd>
          </dl>
        </article>
      );
    })}
  </div>
);

export default Skills;
