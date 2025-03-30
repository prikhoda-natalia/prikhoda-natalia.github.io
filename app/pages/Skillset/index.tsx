import React from 'react';

import Page from '../../components/Page';
import Skills from '../../components/collections/Skills';

import {skillset} from '~/data/skillset';
import { menuItems } from '~/data/menu';

const Skillset = () => (
  <Page menuItems={menuItems}>
    <Page.Section heading="Skillset">
      <Skills items={skillset} />
    </Page.Section>
  </Page>
);

export default Skillset;
