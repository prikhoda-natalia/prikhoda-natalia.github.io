import React from 'react';
import PropTypes from 'prop-types';

import { Page_Heading } from '../index';
import s from '../Page.module.scss';

const _Section = ({ children, heading }) => (
  <section className={s.section}>
    {heading && <Page_Heading value={heading} />}
    <div className={s.content}>{children}</div>
  </section>
);

_Section.propTypes = {
  children: PropTypes.node.isRequired,
  heading: PropTypes.string
};

_Section.defaultProps = {
  heading: undefined
};

export default _Section;
