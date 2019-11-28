import React from 'react';
import PropTypes from 'prop-types';

import ToolsCollection from '../ToolsCollection';

import messages from './messages';
import s from './SkillsetCollection.module.scss';

const SkillsetCollection = ({ items }) => (
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
            <dt className={s.toolsLabel}>{messages.tools}</dt>
            <dd className={s.toolsValue}>
              <ToolsCollection items={item.tools} />
            </dd>
          </dl>
        </article>
      );
    })}
  </div>
);

SkillsetCollection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      blurb: PropTypes.string,
      title: PropTypes.string,
      tools: PropTypes.array
    })
  ).isRequired
};

export default SkillsetCollection;
