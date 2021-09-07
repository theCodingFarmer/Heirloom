import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes, {string} from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledSection } from '../components/_shared/styled-section';

const StyledBlogSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));

  & > .gatsby-image-wrapper {
    width: 100%;
  }
`;
const StyledBlogTitle = styled(StyledH1)`
  margin-top: 3rem;
`;
const StyledDate = styled.div`
  font-size: 0.8rem;

  & span {
    font-weight: 500;
  }
`;
const StyledBlogText = styled.div`
  padding: 2rem;
  width: 100%;
  background: var(--bg-code);
  border-radius: var(--radius);
  border-top-left-radius: 0;
  border-top-right-radius: 0;
`;

const BlogPost = ({ data }) => {
  console.log('data', data.sanityFarmersBlogPost);
  const {title, _createdAt: date, _rawBody: post} = data.sanityFarmersBlogPost;
  // const readingTime = data.markdownRemark.fields.readingTime.text;
  // const post = data.markdownRemark;
  // const coverImage = post.frontmatter.cover_image ? post.frontmatter.cover_image.childImageSharp.fluid : null;
  // const { title, date } = post.frontmatter;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <StyledBlogSection>
        <StyledBlogTitle>{title}</StyledBlogTitle>
        <StyledDate>
          Posted {date}.
        </StyledDate>
        {/*{coverImage && <Img fluid={coverImage} />}*/}
        {/*<StyledBlogText dangerouslySetInnerHTML={{ __html: post.html }} />*/}
      </StyledBlogSection>
    </Layout>
  );
};

BlogPost.propTypes = {
  data: {
    sanityFarmersBlogPost: {
      title: string,
      _createdAt: string,
      _rawBody: [],
      image: {
        asset: {
          url: string
        }
      }
    }
  }
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    sanityFarmersBlogPost(slug: {current: {eq: $slug}}) {
      title
      _createdAt(formatString: "MMMM, D YYYY")
      image {
        asset {
          url
        }
      }
      _rawBody
    }
  }
`;
