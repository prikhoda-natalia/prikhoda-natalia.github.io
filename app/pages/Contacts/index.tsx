import React from 'react';

import Details from '../../components/collections/Details';
import Link from '../../components/Link';
import Page from '../../components/Page';
import { menuItems } from '~/data/menu';

const Contacts = () => {
  const contactDetails = [
    {
      label: 'Email address',
      value: (
        <Link
          href="mailto:prikhoda.natalia.webdev@gmail.com"
          value="prikhoda.natalia.webdev@gmail.com"
        />
      )
    },
    {
      label: 'GitHub account',
      value: <Link href="https://github.com/prikhoda-natalia" value="prikhoda-natalia" />
    },
    {
      label: 'Current location',
      value: 'Sintra, Portugal (most of my work is done remotely)'
    },
    {
      label: 'Speaking languages',
      value: 'Russian, English'
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
