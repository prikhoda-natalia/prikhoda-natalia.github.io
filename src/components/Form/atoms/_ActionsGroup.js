import React from 'react';
import PropTypes from 'prop-types';

import s from '../Form.module.scss';

const _ActionsGroup = ({ children }) => (
  <div className={s.actionsGroup}>
    {React.Children.map(children, (child, index) => {
      return (
        <div className={s.actionsGroupItem} key={index}>
          {child}
        </div>
      );
    })}
  </div>
);

_ActionsGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default _ActionsGroup;
