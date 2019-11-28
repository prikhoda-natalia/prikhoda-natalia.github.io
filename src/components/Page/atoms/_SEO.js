import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const _SEO = ({ banner, description, pathname, title }) => {
  const { site } = useStaticQuery(graphql`
    query SEO {
      site {
        buildTime(formatString: "YYYY-MM-DD")
        siteMetadata {
          author
          defaultBanner: banner
          defaultDescription: description
          defaultTitle: title
          headline
          siteLanguage
          siteUrl
          titleTemplate
        }
      }
    }
  `);

  const {
    buildTime,
    siteMetadata: {
      author,
      defaultBanner,
      defaultDescription,
      defaultTitle,
      headline,
      siteLanguage,
      siteUrl,
      titleTemplate
    }
  } = site;

  const seo = {
    title,
    description: description || defaultDescription,
    banner: `${siteUrl}${banner}`,
    url: `${siteUrl}${pathname}`
  };

  const schemaOrgWebPage = {
    '@context': 'http://schema.org',
    '@type': 'WebPage',
    url: siteUrl,
    headline,
    inLanguage: siteLanguage,
    mainEntityOfPage: siteUrl,
    description: defaultDescription,
    name: defaultTitle,
    author: {
      '@type': 'Person',
      name: author
    },
    copyrightHolder: {
      '@type': 'Person',
      name: author
    },
    copyrightYear: '2019',
    creator: {
      '@type': 'Person',
      name: author
    },
    publisher: {
      '@type': 'Person',
      name: author
    },
    datePublished: '2019-11-10T10:30:00+01:00',
    dateModified: buildTime,
    image: {
      '@type': 'ImageObject',
      url: `${siteUrl}${defaultBanner}`
    }
  };

  // Initial breadcrumb list

  let breadcrumbList = [
    {
      '@type': 'ListItem',
      item: {
        '@id': siteUrl,
        name: 'Homepage'
      },
      position: 1
    }
  ];

  if (pathname !== '/') {
    breadcrumbList.push({
      '@type': 'ListItem',
      item: {
        '@id': seo.url,
        name: seo.title
      },
      position: 2
    });
  }

  const schemaBreadcrumbList = {
    '@context': 'http://schema.org',
    '@type': 'BreadcrumbList',
    description: 'Breadcrumbs list',
    name: 'Breadcrumbs',
    breadcrumbList
  };

  return (
    <Helmet title={seo.title} titleTemplate={titleTemplate}>
      <html lang={siteLanguage} />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <script type="application/ld+json">{JSON.stringify(schemaOrgWebPage)}</script>
      <script type="application/ld+json">{JSON.stringify(schemaBreadcrumbList)}</script>
    </Helmet>
  );
};

_SEO.propTypes = {
  banner: PropTypes.string.isRequired,
  description: PropTypes.string,
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

_SEO.defaultProps = {
  description: undefined
};

export default _SEO;
