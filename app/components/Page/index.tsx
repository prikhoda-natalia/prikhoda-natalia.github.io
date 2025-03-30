import React, { useState } from 'react';
import classNames from 'classnames';

import Button from '../Button';
import CV from '~/data/CV - Natalia Prikhoda - Front-end, React.js, Typescript.pdf';

import s from './Page.module.scss';
import Column from './Column';
import Section from './Section';
import { Link, NavLink } from 'react-router';
import { appPaths } from '~/routes';

type PageProps = {
  children: React.ReactNode;
  hideMenu?: boolean;
  menuItems: {
    label: string;
    to: string;
  }[];
}

const Page = ({ children, hideMenu = false, menuItems }: PageProps) => {
  const [isMobileMenuShown, toggleMobileMenu] = useState(false);
  const thisClass = classNames({
    [s.this]: true,
    [s.this_mobileMenuHidden]: !hideMenu && !isMobileMenuShown,
    [s.this_mobileMenuShown]: isMobileMenuShown
  });
  const menuSwitcherTitle = isMobileMenuShown
    ? 'Close'
    : 'Menu';
  const contentId = 'page-content';
  return (
    <div className={thisClass}>
      <a className={s.skipLink} href={`#${contentId}`} data-reach-skip-link>Skip to main content</a>
      <header className={s.header}>
        <div className={s.brandWrapper}>
          <Link className={s.brand} to={appPaths.home}>
            <span className={classNames(s.brandHeading, s.brandHeading_full)}>Natalia Prikhoda</span>
            <span aria-hidden="true" className={classNames(s.brandHeading, s.brandHeading_short)}>
              NP
            </span>
            <span className={classNames(s.brandSubheading, s.brandSubheading_full)}>web, front-end, UI developer</span>
            <span aria-hidden="true" className={classNames(s.brandSubheading, s.brandSubheading_short)}>
            {`< />`}
            </span>
          </Link>
        </div>
        {!hideMenu && (
          <button className={s.menuSwitcher} onClick={() => toggleMobileMenu(!isMobileMenuShown)}>
            {menuSwitcherTitle}
          </button>
        )}
        <nav className={s.nav}>
          {!hideMenu && (
            <div className={s.menuWrapper}>
              <ul className={s.menu}>
                {menuItems.map(item => (
                  <li className={s.menuItem} key={item.label}>
                    <NavLink className={({isActive}) => classNames({
    [s.menuLink]: true,
    [s.menuLink_active]: isActive
  })} to={item.to}>
                      {item.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <aside className={s.cta}>
            <Button download href={CV} value='Download CV' />
          </aside>
        </nav>
      </header>
      <main className={s.main} id={contentId}>
        {children}
      </main>
      <footer className={s.footer}>Made with ♡ by Natalia Prikhoda</footer>
    </div>
  );
};

Page.Column = Column;
Page.Section = Section;

export default Page;
