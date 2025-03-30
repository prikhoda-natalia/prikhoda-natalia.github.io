import React from 'react';

import s from './Article.module.scss';

type ArticleProps = {
  children: React.ReactNode;
  imageAlt: string;
  imageUrl: string;
  intro: string;
};

const Article = ({ children, imageAlt, imageUrl, intro }: ArticleProps) => (
  <article className={s.this}>
    <aside className={s.imageWrapper}>
      <img className={s.image} src={imageUrl} alt={imageAlt} />
    </aside>
    <p className={s.intro}>{intro}</p>
    <div className={s.content}>{children}</div>
  </article>
);

export default Article;
