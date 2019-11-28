import React from 'react';
import Page, { Page_Section } from '../components/Page';
import PortfolioCollection from '../components/PortfolioCollection';

import data from '../data/portfolio';
import seo from '../seo/portfolio';

const PortfolioPage = () => (
  <Page seo={seo}>
    <Page_Section heading="Portfolio">
      <PortfolioCollection items={data} />
    </Page_Section>
  </Page>
);

export default PortfolioPage;
