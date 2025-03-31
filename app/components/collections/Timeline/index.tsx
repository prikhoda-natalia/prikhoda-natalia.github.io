import React from 'react';

import Details from '../Details';
import List from '../List';
import Tools from '../Tools';

import s from './Timeline.module.scss';
import type { ExperiencesType } from '~/types/ExperienceType';
import type { DetailsType } from '~/types/DetailType';

type TimelineProps = {
  items: ExperiencesType;
};

const Timeline = ({ items }: TimelineProps) => (
  <div className={s.this}>
    {items.map((item, index) => {
      const itemDetails: DetailsType = [
        {
          label: 'Period',
          value: item.details.period
        },
        {
          label: 'Location',
          value: item.details.geo
        },
        {
          label: 'Company name',
          value: item.details.companyName
        }
      ];
      return (
        <article className={s.item} key={item.details.period}>
          <header className={s.header}>
            <h3 className={s.title}>{item.title}</h3>
            <div className={s.details}>
              <Details items={itemDetails} />
            </div>
          </header>
          <dl className={s.description}>
            <dt className={s.descriptionLabel}>Technologies</dt>
            <dd className={s.descriptionValue}>
              <Tools items={item.tools} />
            </dd>
            <dt className={s.descriptionLabel}>Responsibilities</dt>
            <dd className={s.descriptionValue}>
              <List items={item.responsibilities} />
            </dd>
          </dl>
        </article>
      );
    })}
  </div>
);

export default Timeline;
