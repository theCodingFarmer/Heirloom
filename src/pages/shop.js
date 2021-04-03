import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';
import ShopProducts from '../components/ShopProducts';

const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;

const Shop = ({data}) => {

  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Shop" />
      <StyledFullHeightSection>
        <StyledTagsH1>Shop</StyledTagsH1>
        <StyledSeparator />
        Build Your 2022 CSA!
        <StyledSeparator />
        <ShopProducts available={data.products.nodes}/>
        <StyledSeparator />
        <TextLink label="Take me home" link="/" />
      </StyledFullHeightSection>
    </Layout>
  );
};

Shop.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};
export default Shop;

export const shopQuery = graphql`
  {
    products: allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fileAbsolutePath: { regex: "/content/shop/" }, frontmatter: { available: { eq: true } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          price
          options
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        html
      }
    }
  }
`;
