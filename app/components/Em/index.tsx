import React from 'react';

import s from './Em.module.scss';

type EmProps = {
  value: string;
};

const Em = ({ value }: EmProps) => <em className={s.this}>{value}</em>;

export default Em;
