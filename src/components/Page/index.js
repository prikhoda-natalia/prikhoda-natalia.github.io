import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import routes from '../../routes';
import Button from '../Button';
import CV from '../../docs/CV.NataliaPrikhoda.WEB_frontend_UI_developer.pdf';

import Page_Brand from './atoms/_Brand';
import Page_Menu from './atoms/_Menu';
import Page_SEO from './atoms/_SEO';
import messages from './messages';
import s from './Page.module.scss';

const Page = ({ children, hideMenu, seo }) => {
  const [isMobileMenuShown, toggleMobileMenu] = useState(false);
  const thisClass = classNames({
    [s.this]: true,
    [s.this_mobileMenuHidden]: !hideMenu && !isMobileMenuShown,
    [s.this_mobileMenuShown]: isMobileMenuShown
  });
  const menuSwitcherTitle = isMobileMenuShown
    ? messages.menuSwitcher.close
    : messages.menuSwitcher.open;
  const contentId = 'page-content';
  const menuItems = [
    {
      label: messages.menuItems.home,
      to: routes.home
    },
    {
      label: messages.menuItems.portfolio,
      to: routes.portfolio
    },
    {
      label: messages.menuItems.skillset,
      to: routes.skillset
    },
    {
      label: messages.menuItems.experience,
      to: routes.experience
    },
    {
      label: messages.menuItems.contacts,
      to: routes.contacts
    }
  ];
  const brand = {
    url: routes.home,
    heading: {
      full: messages.brand.heading.full,
      short: messages.brand.heading.short
    },
    subheading: {
      full: messages.brand.subheading.full,
      short: messages.brand.subheading.short
    }
  };
  return (
    <div className={thisClass}>
      <Page_SEO {...seo} />
      <a className={s.skipLink} href={`#${contentId}`} data-reach-skip-link>
        {messages.skipToMain}
      </a>
      <header className={s.header}>
        <div className={s.brandWrapper}>
          <Page_Brand {...brand} />
        </div>
        {!hideMenu && (
          <button className={s.menuSwitcher} onClick={() => toggleMobileMenu(!isMobileMenuShown)}>
            {menuSwitcherTitle}
          </button>
        )}
        <nav className={s.nav}>
          {!hideMenu && (
            <div className={s.menuWrapper}>
              <Page_Menu items={menuItems} />
            </div>
          )}
          <aside className={s.cta}>
            <Button download href={CV} value={messages.downloadCV} />
          </aside>
        </nav>
      </header>
      <main className={s.main} id={contentId}>
        {children}
      </main>
      <footer className={s.footer}>{messages.footer}</footer>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired,
  hideMenu: PropTypes.bool,
  seo: PropTypes.shape({}).isRequired
};

Page.defaultProps = {
  hideMenu: false
};

export { default as Page_Column } from './atoms/_Column';
export { default as Page_Heading } from './atoms/_Heading';
export { default as Page_Section } from './atoms/_Section';
export default Page;
