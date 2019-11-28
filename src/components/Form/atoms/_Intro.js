import React from 'react';
import PropTypes from 'prop-types';

import s from '../Form.module.scss';

const _Intro = ({ children }) => <div className={s.intro}>{children}</div>;

_Intro.propTypes = {
  children: PropTypes.node.isRequired
};

export default _Intro;
