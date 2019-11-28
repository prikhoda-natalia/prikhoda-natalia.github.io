import React from 'react';
import PropTypes from 'prop-types';

import s from './Article.module.scss';

const Article = ({ children, imageAlt, imageUrl, intro }) => (
  <article className={s.this}>
    <aside className={s.imageWrapper}>
      <img className={s.image} src={imageUrl} alt={imageAlt} />
    </aside>
    <p className={s.intro}>{intro}</p>
    <div className={s.content}>{children}</div>
  </article>
);

Article.propTypes = {
  children: PropTypes.node.isRequired,
  imageAlt: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired
};

export default Article;
