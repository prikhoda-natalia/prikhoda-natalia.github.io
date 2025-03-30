import React from 'react';

import s from '../Page.module.scss';

type SectionProps = {
  children: React.ReactNode;
  heading?: string;
};

const Section = ({ children, heading }: SectionProps) => (
  <section className={s.section}>
    {heading && (
      <h1 className={s.heading}>
        <span className={s.title}>{heading}</span>
      </h1>
    )}
    <div className={s.content}>{children}</div>
  </section>
);

export default Section;
