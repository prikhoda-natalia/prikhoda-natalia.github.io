import React from 'react';
import Page, { Page_Section } from '../components/Page';
import TimelineCollection from '../components/TimelineCollection';

import data from '../data/experience';
import seo from '../seo/experience';

const ExperiencePage = () => (
  <Page seo={seo}>
    <Page_Section heading="Experience">
      <TimelineCollection items={data} />
    </Page_Section>
  </Page>
);

export default ExperiencePage;
