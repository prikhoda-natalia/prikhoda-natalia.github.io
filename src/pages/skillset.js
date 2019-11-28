import React from 'react';

import Page, { Page_Section } from '../components/Page';
import SkillsetCollection from '../components/SkillsetCollection';

import data from '../data/skillset';
import seo from '../seo/skillset';

const SkillsetPage = () => (
  <Page seo={seo}>
    <Page_Section heading="Skillset">
      <SkillsetCollection items={data} />
    </Page_Section>
  </Page>
);

export default SkillsetPage;
