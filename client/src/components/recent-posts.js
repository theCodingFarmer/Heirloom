import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { flexCenter } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';
import { StyledTextSection } from './_shared/styled-text-section';
import {
    StyledSanityBlogImageContainer,
    StyledSanityBlogImage
} from './_shared/styled-image-container';

const StyledPostsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  margin-top: 2.5rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledPostContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);

  & .gatsby-image-wrapper {
    max-height: 300px;
  }
`;
const StyledDateOverlay = styled.div`
  pointer-events: none;
  z-index: 1;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 3rem;
  width: 3rem;
  color: var(--title-color-light);
  background: var(--bg-code);
  align-items: center;
  border-radius: var(--radius);
  font-weight: 500;
  line-height: 1rem;
`;
const StyledTitleLink = styled(Link)`
  text-decoration: none;

  &:hover h2 {
    color: var(--primary-color);
  }
`;
const StyledBlogLinkContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;
const StyledPostText = styled(StyledTextSection)`
  > p {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
`;
const StyledImageContainer = styled.div`
  min-width: 300px;
  min-height: 200px;
  max-height: 300px;
  position: relative;

  & .gatsby-image-wrapper * {
    transition: transform var(--transition-fast) ease-in-out !important;
  }

  &:hover .gatsby-image-wrapper * {
    transform: scale(1.1);
  }
`;

const RecentPosts = ({ data }) => {
  const recentPosts = data.map((post) => {
      const {title, summary, _createdAt: date} = post.node;
      const coverImage = post.node.image ? post.node.image : null;
      const link = `/blog/` + post.node.slug.current;

    return (
      <StyledPostContainer key={title}>
        <StyledDateOverlay>
          <span>{date}</span>
        </StyledDateOverlay>
        <Link to={link} aria-label={`recent post ${title}`}>
            <StyledSanityBlogImageContainer>
                <StyledSanityBlogImage imageUrl={coverImage.asset.url}/>
            </StyledSanityBlogImageContainer>
        </Link>
        <StyledTitleLink to={link}>
          <StyledH2>{title}</StyledH2>
        </StyledTitleLink>
        <StyledPostText>
          <p>{summary}</p>
        </StyledPostText>
      </StyledPostContainer>
    );
  });

  return (
    <StyledSection id="blog">
      <StyledH1>Farmer's Blog Posts</StyledH1>
      <StyledPostsContainer>{recentPosts}</StyledPostsContainer>
      <StyledBlogLinkContainer>
        <TextLink label="View All Posts" link="/blog" />
      </StyledBlogLinkContainer>
    </StyledSection>
  );
};

RecentPosts.propTypes = {
  data: PropTypes.array.isRequired,
};

export default RecentPosts;
