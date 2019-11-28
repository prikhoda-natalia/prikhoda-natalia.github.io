import React from 'react';
import PropTypes from 'prop-types';

import DetailsCollection from '../DetailsCollection';
import ListCollection from '../ListCollection';
import ToolsCollection from '../ToolsCollection';

import messages from './messages';
import s from './TimelineCollection.module.scss';

const TimelineCollection = ({ items }) => (
  <div className={s.this}>
    {items.map((item, index) => {
      const itemDetails = [
        {
          label: messages.details.period,
          value: item.details.period
        },
        {
          label: messages.details.geo,
          value: item.details.geo
        },
        {
          label: messages.details.companyName,
          value: item.details.companyName
        }
      ];
      return (
        <article className={s.item} key={item.details.period}>
          <header className={s.header}>
            <h3 className={s.title}>{item.title}</h3>
            <div className={s.details}>
              <DetailsCollection items={itemDetails} />
            </div>
          </header>
          <dl className={s.description}>
            <dt className={s.descriptionLabel}>{messages.tools}</dt>
            <dd className={s.descriptionValue}>
              <ToolsCollection items={item.tools} />
            </dd>
            <dt className={s.descriptionLabel}>{messages.responsibilities}</dt>
            <dd className={s.descriptionValue}>
              <ListCollection items={item.responsibilities} />
            </dd>
          </dl>
        </article>
      );
    })}
  </div>
);

TimelineCollection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      details: PropTypes.exact({
        companyName: PropTypes.string,
        geo: PropTypes.string,
        period: PropTypes.string
      }),
      responsibilities: PropTypes.array,
      title: PropTypes.string,
      tools: PropTypes.array
    })
  ).isRequired
};

export default TimelineCollection;
