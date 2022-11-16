import styled from '@emotion/styled';
import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';
import ProductList from '../components/product-list';
import {graphql} from 'gatsby';

const StyledProjectsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;
const AllThatWeGrow = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="All That We Grow" />
      <StyledFullHeightSection>
        <StyledProjectsH1>All That We Grow</StyledProjectsH1>
        <StyledSeparator />
        <ProductList products={nodes} />
      </StyledFullHeightSection>
    </Layout>
  );
};

export default AllThatWeGrow;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: ASC, fields: frontmatter___title }
      filter: { fileAbsolutePath: { regex: "/content/projects/" }, frontmatter: { featured: { eq: false } } }
    ) {
      nodes {
        frontmatter {
          cover_image {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          date(formatString: "D MMMM, YYYY")
          title
          highlights
        }
        html
      }
    }
  }
`;
