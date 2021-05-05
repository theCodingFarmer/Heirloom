import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import {mq} from './_shared/media';
import {StyledH1} from './_shared/styled-headings';
import {StyledSection} from './_shared/styled-section';

const StyledTextSection = styled.section`
    color: var(--paragraph-text-dark);
    white-space: pre-line;
`;

const StyledFeatureGridContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 2.5rem;
    margin-top: 2.5rem;
    width: 100%;
    
    ${mq.gt.xs} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${mq.gt.sm} {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const StyledFeatureCard = styled.article`
    border: 1px solid var(--bg-content-color);
    border-radius: var(--radius);
    
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: var(--card-tint-color);
    background-blend-mode: multiply;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 200px;
    padding: 1rem;
    
    & svg {
        height: 2rem;
        width: 2rem;
        font-size: 2rem;
    }
`;

const StyledCardLabel = styled.h2`
    font-size: 1.2rem;
    text-align: center;
    margin: 1rem 0;
    color: var(--card-font-color);
`;

const StyledDivider = styled.div`
    width: 15%;
    height: 2px;
    background-color: var(--primary-color);
    margin-bottom: 1rem;
`;

const StyledFeatureDescription = styled.p`
    font-size: 0.8rem;
    color: var(--card-font-color);
`;

const CardGrid = ({cards, description, title, id = null}) => {

    const featureCards = cards.map(({image, label, description}, index) => {

        const imageUrl = !image ? '' : `url(${require(`../images/${image}`)})`;

        return (
            <StyledFeatureCard key={index} style={{backgroundImage: imageUrl}}>
                <StyledCardLabel>{label}</StyledCardLabel>
                <StyledDivider />
                <StyledFeatureDescription>{description}</StyledFeatureDescription>
            </StyledFeatureCard>
        );
    });

    return (
        <StyledSection id={id}>
            {title && <StyledH1>{title}</StyledH1>}
            <StyledTextSection dangerouslySetInnerHTML={{__html: description}} />
            <StyledFeatureGridContainer>{featureCards}</StyledFeatureGridContainer>
        </StyledSection>
    );
};

CardGrid.propTypes = {
    cards: PropTypes.array.isRequired,
    description: PropTypes.string.isRequired,
    id: PropTypes.string,
    title: PropTypes.string,
};

export default CardGrid;
