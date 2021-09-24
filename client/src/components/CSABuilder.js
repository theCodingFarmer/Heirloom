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
import {HeirloomIcon} from './icon';

const size = {
    small: 60,
    medium: 80,
    large: 100
};

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

const StyledSeasonTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    align-items: center;
`;

 const StyledSeasonHeaderText = styled.h3`
    font-weight: 600;
    margin-bottom: 0;
`;

const StyledBasketSizeText = styled.p`
    display: flex;
    font-weight: 600;
    color: var(--title-color-dark);
    align-self: center;
`;


const StyledSeasonWeeksText = styled.p`
    color: var(--title-color-dark)
`;

const StyledSeasonContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const StyledIconContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    margin: 0 20px;
`;

const StyledHeirloomIcon = styled(HeirloomIcon)`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    color: var(--title-color-dark)
`;

const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const CSABuilder = () => {

    return (
        <StyledSection id="projects">
            <StyledH1>Build Your 2022 CSA Share!</StyledH1>
            <StyledSeasonTextContainer>
                <StyledSeasonHeaderText>Spring Share</StyledSeasonHeaderText>
                <StyledSeasonWeeksText>(5 Weeks)</StyledSeasonWeeksText>
            </StyledSeasonTextContainer>
            <StyledSeasonContainer>
                <StyledIconContainer>
                    <StyledHeirloomIcon
                        icon={'vegBasket'}
                        size={size.large}
                    />
                    <StyledBasketSizeText>Large</StyledBasketSizeText>
                </StyledIconContainer>
                <StyledIconContainer>
                    <StyledHeirloomIcon
                        icon={'vegBasket'}
                        size={size.medium}
                    />
                    <StyledBasketSizeText>Medium</StyledBasketSizeText>
                </StyledIconContainer>
                <StyledIconContainer>
                    <StyledHeirloomIcon
                        icon={'vegBasket'}
                        size={size.small}
                    />
                    <StyledBasketSizeText>Small</StyledBasketSizeText>
                </StyledIconContainer>
            </StyledSeasonContainer>
        </StyledSection>
    );
};

CSABuilder.propTypes = {
  available: PropTypes.array.isRequired,
};

export default CSABuilder;
