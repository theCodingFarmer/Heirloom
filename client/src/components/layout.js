import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { graphql, useStaticQuery } from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import '../styles/index.styl';
import Footer from './footer';
import Header from './header';
import NavigationBar from './nagivation-bar';
import ScrollToTop from './scroll-to-top';
import {headerDataShape, locationObjectShape, menuLinksShape} from '../prop-shapes/prop-type-shapes';
import {CartStateContext} from '../contexts/CartContextProvider';

library.add(fab, fas);

if (typeof window !== 'undefined') {
  require('smooth-scroll')('a[href*="#"]');
}

const Layout = ({ children, location, menuLinks }) => {
    const shoppingCart = useContext(CartStateContext);


    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          author
        }
      }
    header: markdownRemark(fileAbsolutePath: { regex: "/content/sections/header/" }) {
      frontmatter {
        button_label
        button_link
      }
    }
    }
  `);

  const { author } = data.site.siteMetadata;
  const headerData = {
      label: data.header.frontmatter.button_label,
      link: data.header.frontmatter.button_link
  };

  return (
    <React.Fragment>
      <Header location={location} menuLinks={menuLinks} headerData={headerData} shoppingCartTotalItems={shoppingCart.productCart.length}/>
      <main style={{marginTop: 'calc(var(--header-height) - 2 * var(--header-height))'}}>{children}</main>
      <Footer author={author} />
      <NavigationBar menuLinks={menuLinks} />
      <ScrollToTop />
    </React.Fragment>
  );
};

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    headerData: PropTypes.objectOf(headerDataShape),
    location: PropTypes.objectOf(locationObjectShape).isRequired,
    menuLinks: PropTypes.arrayOf(menuLinksShape).isRequired,
    shoppingCartTotalItems: PropTypes.number
};
