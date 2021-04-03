import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import HighlightList from './HighlightList';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledAvailableProduct = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`;
const StyledProductInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledDescription = styled.section`
  ${contentBox}
  max-height: 180px;
  position: relative;
  padding: 10px;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;

const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const ShopProducts = ({available}) => {
    const availableProducts = available.map((project, index) => {
        const coverImage = project.frontmatter.cover_image ? project.frontmatter.cover_image.childImageSharp.fluid : null;
        const title = project.frontmatter.title;

        return (
            <StyledAvailableProduct key={title + index}>
                {coverImage && (
                    <StyledImageContainer hasHover>
                        <Img fluid={coverImage} />
                    </StyledImageContainer>
                )}
                <StyledProductInfoContainer>
                    <StyledH2>{title}</StyledH2>
                    <StyledDescription dangerouslySetInnerHTML={{__html: project.html}} />
                    <HighlightList highlights={project.frontmatter.options} />
                </StyledProductInfoContainer>
            </StyledAvailableProduct>
        );
    });

    return (
        <StyledSection id="projects">
            <StyledH1>Additional Products</StyledH1>
            {availableProducts}
        </StyledSection>
    );
};

ShopProducts.propTypes = {
  available: PropTypes.array.isRequired,
};

export default ShopProducts;
