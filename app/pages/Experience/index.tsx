import React from 'react';
import Page from '../../components/Page';
import Timeline from '../../components/collections/Timeline';

import {experience} from '~/data/experience';
import { menuItems } from '~/data/menu';

const Experience = () => (
  <Page menuItems={menuItems}>
    <Page.Section heading="Experience">
      <Timeline items={experience} />
    </Page.Section>
  </Page>
);

export default Experience;
