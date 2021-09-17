import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import BlockContent from '@sanity/block-content-to-react';
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
  margin-bottom: 2rem;

  & span {
    font-weight: 500;
  }
`;

export const StyledCoverImage = styled.div`
    width: 100%;
    height: 450px;
    background-image: url('${props => props.imageUrl}');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const StyledBlockContent = styled(BlockContent)`
  padding: 1rem;
  width: 100%;
  color: var(--paragraph-text-dark);
  
  & p { 
    color: var(--paragraph-text-dark);
  }
  
  & figure {
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    padding: 1rem;
    margin: 2rem 0;
  }
  
  & img {
    max-height: 500px;
  }
`;

const StyledBlockContentContainer = styled.div`
  padding: 1rem;
  width: 100%;
  
  & p { 
    color: var(--paragraph-text-dark);
  }
  
  & h6 {
     color: var(--paragraph-text-dark);
     font-weight: bold;
  }
  
  & figure {
    display: flex;
    justify-content: center;
    width: 100%;
    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    padding: 1rem;
    margin: 2rem 0;
  }
  
  & img {
    max-height: 500px;
  }
`;

const BlogPost = ({ data }) => {
  console.log('data', data.sanityFarmersBlogPost);
  const {title, _createdAt: date, _rawBody, image} = data.sanityFarmersBlogPost;
  const coverImage = image.asset.url;
  console.log('coverImage', coverImage);
  return (
    <Layout menuLinks={blogMenuLinks}>
      <StyledBlogSection>
        <StyledBlogTitle>{title}</StyledBlogTitle>
        <StyledCoverImage imageUrl={coverImage}/>
        <StyledDate>
          Posted {date}.
        </StyledDate>
        <StyledBlockContentContainer>
          <BlockContent
              blocks={_rawBody}
              projectId={'rus7hoo0'}
              dataset={'production'}
          />
        </StyledBlockContentContainer>
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
