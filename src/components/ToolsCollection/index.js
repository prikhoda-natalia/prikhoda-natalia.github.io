import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import s from './ToolsCollection.module.scss';

const ToolsCollection = ({ items, theme }) => {
  const thisClass = classNames({
    [s.this]: true,
    [s[`this_${theme}`]]: true
  });
  return (
    <ul className={thisClass}>
      {items.map(item => (
        <li className={s.item} key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

ToolsCollection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  theme: PropTypes.oneOf(['dark', 'light'])
};

ToolsCollection.defaultProps = {
  theme: 'dark'
};

export default ToolsCollection;
