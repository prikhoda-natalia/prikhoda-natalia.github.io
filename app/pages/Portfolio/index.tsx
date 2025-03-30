import React from 'react';
import Page from '../../components/Page';
import Projects from '../../components/collections/Projects';

import {portfolio} from '~/data/portfolio';
import { menuItems } from '~/data/menu';

const Portfolio = () => (
  <Page menuItems={menuItems}>
    <Page.Section heading="Portfolio">
      <Projects items={portfolio} />
    </Page.Section>
  </Page>
);

export default Portfolio;
