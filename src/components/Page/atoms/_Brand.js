import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import s from '../Page.module.scss';

const _Brand = ({ heading, subheading, url }) => (
  <a className={s.brand} href={url}>
    <span className={classNames(s.brandHeading, s.brandHeading_full)}>{heading.full}</span>
    <span aria-hidden="true" className={classNames(s.brandHeading, s.brandHeading_short)}>
      {heading.short}
    </span>
    <span className={classNames(s.brandSubheading, s.brandSubheading_full)}>{subheading.full}</span>
    <span aria-hidden="true" className={classNames(s.brandSubheading, s.brandSubheading_short)}>
      {subheading.short}
    </span>
  </a>
);

_Brand.propTypes = {
  heading: PropTypes.shape({
    full: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired
  }).isRequired,
  subheading: PropTypes.shape({
    full: PropTypes.string.isRequired,
    short: PropTypes.string.isRequired
  }).isRequired,
  url: PropTypes.string.isRequired
};

export default _Brand;
