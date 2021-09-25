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
    small: 46,
    medium: 60,
    large: 70
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

const StyledSeasonContainer = styled.div`
    width: 100%;
    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    margin-top: -1px;
    padding: 1em 0;
`;

const StyledSeasonTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0 12px;
`;

 const StyledSeasonHeaderText = styled.p`
    > span {
        font-size: 1.4em;
        font-weight: 600;
        color: var(--title-color-dark);
    }
    
    font-size: 1.2em;
    color: var(--secondary-color);
    margin-bottom: -0.8rem;

`;

const StyledBasketSizeText = styled.p`
    display: flex;
    font-weight: 600;
    color: var(--title-color-dark);
    align-self: center;
    margin-bottom: 2px;
`;


const StyledBasketsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    margin-top: 0.5em;
`;

const StyledBasketIconAndTextContainer = styled.div`    
    position: relative;
    margin: 0 0.5rem;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        right: 100%;
        bottom: 0;
        background: var(--primary-color);
        height: 4px;
        transition: right var(--transition-fast) ease-out;
    }
    
    > svg {
        fill: var(--secondary-color);
    }
    
    > p {
        color: var(--secondary-color);
    }

    &:hover:before {
        right: 0;
    }
    
    &:hover > p {
        color: var(--primary-color);
    }
    
    &:hover > svg {
        fill: var(--primary-color);
    }
`;

const StyledHeirloomIcon = styled(HeirloomIcon)`
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
`;

const StyledSeasonPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
    box-shadow: 1px 1px 5px 0 rgba(0,0,0,0.02),1px 1px 15px 0 rgba(0,0,0,0.03);
    background-color: var(--card-tint-color);
    padding: 0.2em 0.5em;
    justify-content: center;
    align-items: center;
`;

const StyledSeasonTotalPrice = styled.p`
    margin-bottom: 0;
    font-weight: 600;
    font-size: 1.1em;
    color: var(--title-color-light);
`;

const StyledSeasonPricePerWeek = styled.p`
    margin-bottom: 0;
    font-weight: 600;
    color: var(--title-color-light);
`;

const CSABuilder = () => {

    return (
        <StyledSection id="projects">
            <StyledH1>Build Your 2022 CSA Share!</StyledH1>
            <p>Select your preferred basket size for each season then checkout to order your 2022 share!</p>
            <StyledSeasonContainer>
                <StyledSeasonTextContainer>
                    <StyledSeasonHeaderText><span>Spring Share</span> - 5 Weeks</StyledSeasonHeaderText>
                    <HighlightList highlights={['Kale', 'Turnips', 'Lettuce', 'Tomatoes', 'Garlic']} />
                </StyledSeasonTextContainer>
                <StyledBasketsContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.large}
                        />
                        <StyledBasketSizeText>Large</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.medium}
                        />
                        <StyledBasketSizeText>Medium</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.small}
                        />
                        <StyledBasketSizeText>Small</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledSeasonPriceContainer>
                        <StyledSeasonPricePerWeek>Price:</StyledSeasonPricePerWeek>
                        <StyledSeasonTotalPrice>$200.00</StyledSeasonTotalPrice>
                        <StyledSeasonPricePerWeek>$40/wk</StyledSeasonPricePerWeek>
                    </StyledSeasonPriceContainer>
                </StyledBasketsContainer>
            </StyledSeasonContainer>

            <StyledSeasonContainer>
                <StyledSeasonTextContainer>
                    <StyledSeasonHeaderText><span>Spring Share</span> - 5 Weeks</StyledSeasonHeaderText>
                    <HighlightList highlights={['Kale', 'Turnips', 'Lettuce', 'Tomatoes', 'Garlic']} />
                </StyledSeasonTextContainer>
                <StyledBasketsContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.large}
                        />
                        <StyledBasketSizeText>Large</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.medium}
                        />
                        <StyledBasketSizeText>Medium</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.small}
                        />
                        <StyledBasketSizeText>Small</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledSeasonPriceContainer>
                        <StyledSeasonPricePerWeek>Price:</StyledSeasonPricePerWeek>
                        <StyledSeasonTotalPrice>$200.00</StyledSeasonTotalPrice>
                        <StyledSeasonPricePerWeek>$40/wk</StyledSeasonPricePerWeek>
                    </StyledSeasonPriceContainer>
                </StyledBasketsContainer>
            </StyledSeasonContainer>

            <StyledSeasonContainer>
                <StyledSeasonTextContainer>
                    <StyledSeasonHeaderText><span>Spring Share</span> - 5 Weeks</StyledSeasonHeaderText>
                    <HighlightList highlights={['Kale', 'Turnips', 'Lettuce', 'Tomatoes', 'Garlic']} />
                </StyledSeasonTextContainer>
                <StyledBasketsContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.large}
                        />
                        <StyledBasketSizeText>Large</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.medium}
                        />
                        <StyledBasketSizeText>Medium</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer>
                        <StyledHeirloomIcon
                            icon={'vegBasket'}
                            size={size.small}
                        />
                        <StyledBasketSizeText>Small</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledSeasonPriceContainer>
                        <StyledSeasonPricePerWeek>Price:</StyledSeasonPricePerWeek>
                        <StyledSeasonTotalPrice>$200.00</StyledSeasonTotalPrice>
                        <StyledSeasonPricePerWeek>$40/wk</StyledSeasonPricePerWeek>
                    </StyledSeasonPriceContainer>
                </StyledBasketsContainer>
            </StyledSeasonContainer>
        </StyledSection>
    );
};

CSABuilder.propTypes = {
  available: PropTypes.array.isRequired,
};

export default CSABuilder;
