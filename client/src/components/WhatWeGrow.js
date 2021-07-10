import styled from '@emotion/styled';
import Image from 'gatsby-plugin-sanity-image';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import HighlightList from './HighlightList';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import {
    StyledImageContainer,
    StyledSanityImageContainer,
    StyledStaticImageContainer
} from './_shared/styled-image-container';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';

const StyledFeaturedProduct = styled.article`
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

const StyledTextSection = styled.section`
    color: var(--paragraph-text-dark);
    white-space: pre-line;
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

const WhatWeGrow = ({data}) => {
    console.log('data', data);

    const {
        featuredProductSectionTitle,
        featuredProductSectionDescription,
        featuredProductCards,
        featuredProductLinkText
    } = data;

    const featuredProducts = featuredProductCards.map((product, index) => {
        const coverImage = product.image ? product.image : null;
        const {_id, description, highlights, title} = product;

        return (
            <StyledFeaturedProduct key={_id}>
                {coverImage && (
                    <StyledSanityImageContainer hasHover>
                        <Image {...coverImage}/>
                    </StyledSanityImageContainer>
                )}
                <StyledProductInfoContainer>
                    <StyledH2>{title}</StyledH2>
                    <StyledDescription dangerouslySetInnerHTML={{__html: `<p>${description}</p>`}} />
                    <HighlightList highlights={highlights} />
                </StyledProductInfoContainer>
            </StyledFeaturedProduct>
        );
    });

    return (
        <StyledSection id="projects">
            <StyledH1>{featuredProductSectionTitle}</StyledH1>
            {featuredProductSectionDescription &&
                <StyledTextSection dangerouslySetInnerHTML={{__html: `<p>${featuredProductSectionDescription}</p>`}} />
            }
            {featuredProducts}
            <StyledArchiveContainer>
                {featuredProductLinkText &&
                    <TextLink label={`${featuredProductLinkText}`} link="/AllThatWeGrow" />
                }
            </StyledArchiveContainer>
        </StyledSection>
    );
};

WhatWeGrow.propTypes = {
  data: PropTypes.object.isRequired,
};

export default WhatWeGrow;
