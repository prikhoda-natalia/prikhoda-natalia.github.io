import React from 'react';

import Details from '../../components/collections/Details';
import Link from '../../components/Link';
import Page from '../../components/Page';
import { menuItems } from '~/data/menu';

const Contacts = () => {
  const contactDetails = [
    {
      label: 'Email',
      value: (
        <Link
          href="mailto:prikhoda.natalia.webdev@gmail.com"
          value="prikhoda.natalia.webdev@gmail.com"
        />
      )
    },
    {
      label: 'LinkedIn',
      value: <Link href="http://www.linkedin.com/in/prikhoda-natalia" value="prikhoda-natalia" />
    },
    {
      label: 'GitHub',
      value: <Link href="https://github.com/prikhoda-natalia" value="prikhoda-natalia" />
    },
    {
      label: 'Portfolio',
      value: <Link href="https://prikhoda-natalia.github.io/" value="prikhoda-natalia.github.io" />
    },
    {
      label: 'Current location',
      value: 'Lisbon, Portugal, GMT +0'
    }
  ];
  return (
    <Page menuItems={menuItems}>
      <Page.Section heading="Contacts">
        <Details items={contactDetails} />
      </Page.Section>
    </Page>
  );
};

export default Contacts;
