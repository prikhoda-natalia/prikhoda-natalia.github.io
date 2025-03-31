import React from 'react';

import s from './Details.module.scss';
import Link from '~/components/Link';
import type { DetailsType } from '~/types/DetailType';

type DetailsProps = {
  items: DetailsType;
};

const Details = ({ items }: DetailsProps) => (
  <ul className={s.details}>
    {items.map(
      item =>
        item.value && (
          <li className={s.item} key={item.label}>
            <span className={s.label}>{item.label}</span>
            {item.url ? (
              <Link href={item.url} value={item.value} />
            ) : (
              <span className={s.value}>{item.value}</span>
            )}
          </li>
        )
    )}
  </ul>
);

export default Details;
