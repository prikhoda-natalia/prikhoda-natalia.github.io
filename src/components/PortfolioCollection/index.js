import React from 'react';
import PropTypes from 'prop-types';

import DetailsCollection from '../DetailsCollection';
import Link from '../Link';
import ToolsCollection from '../ToolsCollection';

import messages from './messages';
import s from './PortfolioCollection.module.scss';

const PortfolioCollection = ({ items }) => (
  <div className={s.this}>
    {items.map(item => {
      const itemDetails = [
        {
          label: messages.details.role,
          value: item.details.role
        },
        {
          label: messages.details.collaboration,
          value: item.details.collaboration
        },
        {
          label: messages.details.website,
          value: <Link href={item.details.website} value={item.details.website} />
        }
      ];
      return (
        <article className={s.item} key={item.title}>
          <div className={s.media}>
            <img alt={item.image.alt} className={s.image} src={item.image.url} />
          </div>
          <div className={s.content}>
            <header className={s.header}>
              <h3 className={s.title}>web application</h3>
              <p className={s.blurb}>{item.blurb}</p>
            </header>
            <aside className={s.aside}>
              <dl className={s.tools}>
                <dt className={s.toolsLabel}>{messages.tools}</dt>
                <dd className={s.toolsValue}>
                  <ToolsCollection items={item.tools} theme="light" />
                </dd>
              </dl>
            </aside>
            <p className={s.summary}>{item.summary}</p>
            <div className={s.details}>
              <DetailsCollection items={itemDetails} />
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

PortfolioCollection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      blurb: PropTypes.string,
      details: PropTypes.exact({
        collaboration: PropTypes.string,
        role: PropTypes.string,
        website: PropTypes.string
      }),
      image: PropTypes.exact({
        alt: PropTypes.string,
        url: PropTypes.string
      }),
      summary: PropTypes.string,
      title: PropTypes.string,
      tools: PropTypes.array
    })
  ).isRequired
};

export default PortfolioCollection;
