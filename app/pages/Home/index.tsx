import React from 'react';

import Article from '../../components/Article';
import BoxModel from '../../components/BoxModel';
import Em from '../../components/Em';
import Page from '../../components/Page';
import NataliaPrikhoda from '~/data/natalia-prikhoda.jpg';
import { menuItems } from '~/data/menu';

const Home = () => (
  <Page hideMenu menuItems={menuItems}>
    <Page.Column>
      <Article
        imageAlt="Natalia Prikhoda · WEB, front-end, UI developer"
        imageUrl={NataliaPrikhoda}
        intro="Hi, my name is Natalia 👋 I'm a front-end developer"
      >
        <p>
          I create, maintain, and optimize web-based software using <b>React.js</b>, <b>Typescript</b>, and <b>SCSS</b>. My main goal is to ensure seamless digital UX accessible on different devices.
        </p>
        <p>
          <Em value="Click on one of the boxes to learn about me" />
        </p>
      </Article>
    </Page.Column>
    <Page.Column>
      <BoxModel />
    </Page.Column>
  </Page>
);

export default Home;
