import React from 'react';

import Article from '../components/Article';
import BoxModelSet from '../components/BoxModelSet';
import Em from '../components/Em';
import Page, { Page_Column } from '../components/Page';
import NataliaPrikhoda from '../images/natalia-prikhoda.jpg';
import seo from '../seo/index';

const IndexPage = () => (
  <Page hideMenu seo={seo}>
    <Page_Column>
      <Article
        imageAlt="Natalia Prikhoda · WEB, front-end, UI developer"
        imageUrl={NataliaPrikhoda}
        intro="Hey, my name is Natalia 👋 I'm a front-end developer"
      >
        <p>
          I create the front-end side of websites and web applications. My main focus is on building
          UI components and making a product accessible on different devices.
        </p>
        <p>
          <Em value="Click on one of the boxes to learn about me" />
        </p>
      </Article>
    </Page_Column>
    <Page_Column>
      <BoxModelSet />
    </Page_Column>
  </Page>
);

export default IndexPage;
