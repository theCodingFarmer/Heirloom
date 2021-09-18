import styled from '@emotion/styled';
import { Pagination } from 'antd';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledFullHeightSection } from '../components/_shared/styled-section';

const StyledPaginationContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;

  & ul.ant-pagination {
    cursor: pointer;
    display: flex;
    list-style: none;

    & > li {
      ${flexCenter};
      min-width: 1rem;
    }
    & > li.ant-pagination-item {
      font-size: 1.5rem;
      padding: 0 0.25rem;
    }
    & > li.ant-pagination-disabled > a {
      color: var(--disabled-color);
    }
    & > li.ant-pagination-item-active > a {
      text-decoration: underline;
    }
  }
`;
const Blog = ({ data }) => {
  let [currentPage, setCurrentPage] = React.useState(1);

  const onPaginationChange = (page) => {
    setCurrentPage(page);
  };

  let paginationSize = data.site.siteMetadata.paginationPageSize;
  let leftCursor = (currentPage - 1) * paginationSize;
  let rightCursor = leftCursor + paginationSize;

  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Blog" />
      <StyledFullHeightSection>
        {data.allSanityFarmersBlogPost.edges.slice(leftCursor, rightCursor).map(({ node }) => {
          const coverImage = node.image.asset.url ? node.image.asset.url : null;
          return (
            <PostCard
              key={node.slug}
              coverImage={coverImage}
              title={node.title}
              date={node.publishDate}
              description={node.summary}
              link={`/blog/${node.slug.current}`}
            />
          );
        })}
        <StyledPaginationContainer>
          <Pagination
            pageSize={paginationSize}
            current={currentPage}
            onChange={onPaginationChange}
            total={data.allSanityFarmersBlogPost.edges.length}
          />
        </StyledPaginationContainer>
      </StyledFullHeightSection>
    </Layout>
  );
};

Blog.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Blog;

export const query = graphql`
  query {
      allSanityFarmersBlogPost(sort: {order: DESC, fields: publishDate}) {
        edges {
          node {
            slug {
              current
            }
            summary
            title
            image {
              asset {
                url
              }
            }
            publishDate(formatString: "MMMM D, YYYY")
          }
        }
      }
      site {
        siteMetadata {
          paginationPageSize
        }
      }
  }
`;
