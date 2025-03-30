import React from 'react';
import s from '../Page.module.scss';

type ColumnProps = {
  children: React.ReactNode;
};

const Column = ({ children }: ColumnProps) => <section className={s.column}>{children}</section>;

export default Column;
