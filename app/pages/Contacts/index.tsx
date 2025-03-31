import React from 'react';

import Details from '../../components/collections/Details';
import Page from '../../components/Page';
import { menuItems } from '~/data/menu';
import { contacts } from '~/data/contacts';

const Contacts = () => {
  return (
    <Page menuItems={menuItems}>
      <Page.Section heading="Contacts">
        <Details items={contacts} />
      </Page.Section>
    </Page>
  );
};

export default Contacts;
