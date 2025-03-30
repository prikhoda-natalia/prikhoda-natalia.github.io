import React from 'react';

import s from './Details.module.scss';

type DetailsProps = {
  items: Array<{
    label: string;
    value: string | React.ReactNode;
  }>;
};

const Details = ({ items }: DetailsProps) => (
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

export default Details;
