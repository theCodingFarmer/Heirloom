import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import TextLink from './links/text-link';
import HighlightList from './HighlightList';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';
import {HeirloomIcon} from './icon';

const iconSize = {
    small: 46,
    medium: 60,
    large: 70
};

const CSA = {
    SIZE: {
        NONE: 'None',
        LARGE: 'Large',
        MEDIUM: 'Medium',
        SMALL: 'Small'
    },
    SEASON : {
        SPRING: 'Spring',
        SUMMER: 'Summer',
        FALL: 'Fall'
    }
}

const StyledSeasonContainer = styled.div`
    width: 100%;
    border-top: 1px solid var(--primary-color);
    border-bottom: 1px solid var(--primary-color);
    margin-top: -1px;
    padding: 1em 0;
`;

const StyledMessage = styled.p`
    color: var(--title-color-dark);
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
    max-width: 500px;
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
        right: ${(props) => props.isSelected ? '0' : '100%'};
        bottom: 0;
        background: var(--primary-color);
        height: 4px;
        transition: right var(--transition-fast) ease-out;
    }
    
    > svg {
        fill: var(${(props) => props.isSelected ? '--primary-color' : '--secondary-color'});
    }
    
    > p {
        color: var(${(props) => props.isSelected ? '--primary-color' : '--secondary-color'});
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

const StyledOrderButton = styled.button`
`;

const changeSelection = (basketSizeSelection, currentBasketSize, setIsSelected) => {
    const button = document.querySelector('#order-button')
    const select = document.querySelector('#frame_color')


    if (basketSizeSelection === currentBasketSize) {
        setIsSelected('none');
    }

    if (basketSizeSelection !== currentBasketSize) {
        setIsSelected(basketSizeSelection);

        button.setAttribute("data-item-custom1-value", basketSizeSelection)
    }
}

const CSABuilder = () => {

    const fakeProps = {
        title: '',
        message: 'Select your preferred basket size for each season then checkout to order your 2022 share!',
        year: 2022,
        pricing: {
            small: 9,
            medium: 17,
            large: 40
        },
        seasons: [
            {
                season: 'Spring',
                active: true,
                weeks: 5,
                dates: 'May 31 - July 3',
                produce: ['Kale', 'Turnips', 'Lettuce', ' Green Beans'],
                basketSize: {
                    small: {
                        price: 45,
                        active: true,
                    }
                }
            },
            {
                season: 'Summer',
                weeks: 13,
                dates: 'July 5 - Oct 2',
                produce: ['Kale', 'Carrots', 'Lettuce', 'Tomatoes', 'Egg Plant', 'Peppers']
            },
            {
                season: 'Fall',
                weeks: 4,
                dates: 'Oct 4 - Oct 30',
                produce: ['Spaghetti Squash', 'Turnips', 'Acorn Squash', 'Tomatoes', 'Garlic']
            },
        ]
    }

    const [isSelected, setIsSelected] = useState('none');
    console.log('isSelected', isSelected);

    return (
        <StyledSection id="projects">
            <StyledH2>{`Build Your ${fakeProps.year} CSA Share`}</StyledH2>
            <StyledMessage>Select your preferred basket size for each season then checkout to order your 2022 share!</StyledMessage>
            <StyledSeasonContainer>
                <StyledSeasonTextContainer>
                    <StyledSeasonHeaderText><span>Spring Share</span> - 5 Weeks</StyledSeasonHeaderText>
                    <HighlightList highlights={['Kale', 'Turnips', 'Lettuce', 'Tomatoes', 'Garlic']} />
                </StyledSeasonTextContainer>
                <StyledBasketsContainer>
                    <StyledBasketIconAndTextContainer
                        isSelected={isSelected === CSA.SIZE.LARGE}
                        onClick={() => changeSelection(CSA.SIZE.LARGE, isSelected, setIsSelected)}
                    >
                        <HeirloomIcon
                            icon={'vegBasket'}
                            size={iconSize.large}
                        />
                        <StyledBasketSizeText>Large</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer
                        isSelected={isSelected === CSA.SIZE.MEDIUM}
                        onClick={() => changeSelection(CSA.SIZE.MEDIUM, isSelected, setIsSelected)}

                    >
                        <HeirloomIcon
                            icon={'vegBasket'}
                            size={iconSize.medium}
                        />
                        <StyledBasketSizeText>Medium</StyledBasketSizeText>
                    </StyledBasketIconAndTextContainer>
                    <StyledBasketIconAndTextContainer
                        isSelected={isSelected === CSA.SIZE.SMALL}
                        onClick={() => changeSelection(CSA.SIZE.SMALL, isSelected, setIsSelected)}
                    >
                        <HeirloomIcon
                            icon={'vegBasket'}
                            size={iconSize.small}
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
            <StyledOrderButton
                id={'order-button'}
            >
                Order Your CSA
            </StyledOrderButton>
        </StyledSection>
    );
};

CSABuilder.propTypes = {
  available: PropTypes.array.isRequired,
};

export default CSABuilder;
