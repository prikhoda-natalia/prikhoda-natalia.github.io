import React from 'react';

import Details from '../Details';
import Link from '../../Link';
import Tools from '../Tools';

import s from './Projects.module.scss';

type ProjectsProps = {
  items: Array<{
    blurb: string;
    details: {
      collaboration: string;
      role: string;
      website: string;
    };
    image: {
      alt: string;
      url: string;
    };
    summary: string;
    title: string;
    tools: Array<string>;
  }>;
};

const Projects = ({ items }: ProjectsProps) => (
  <div className={s.this}>
    {items.map(item => {
      const itemDetails = [
        {
          label: 'My role',
          value: item.details.role
        },
        {
          label: 'Full team',
          value: item.details.collaboration
        },
        {
          label: 'Website URL',
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
                <dt className={s.toolsLabel}>Technologies</dt>
                <dd className={s.toolsValue}>
                  <Tools items={item.tools} theme="light" />
                </dd>
              </dl>
            </aside>
            <p className={s.summary}>{item.summary}</p>
            <div className={s.details}>
              <Details items={itemDetails} />
            </div>
          </div>
        </article>
      );
    })}
  </div>
);

export default Projects;
