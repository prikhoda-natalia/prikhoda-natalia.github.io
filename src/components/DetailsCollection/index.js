import React from 'react';
import PropTypes from 'prop-types';

import s from './DetailsCollection.module.scss';

const DetailsCollection = ({ items }) => (
  <dl className={s.this}>
    {items.map(
      item =>
        item.value && (
          <React.Fragment key={item.label}>
            <dt className={s.label}>{item.label}</dt>
            <dd className={s.value}>{item.value}</dd>
          </React.Fragment>
        )
    )}
  </dl>
);

DetailsCollection.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired
    })
  ).isRequired
};

export default DetailsCollection;
