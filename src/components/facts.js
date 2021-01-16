import styled from '@emotion/styled';
import React from 'react';
import StyledSkewedSection from './skewed-section';
import { StyledH1 } from './_shared/styled-headings';

const StyledLogoSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const StyledFactNumber = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .bulletPoint {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-weight: bold;
  }

  & > .details {
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--bg-color);
    margin-left: 2rem;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: -2rem;
      width: 1rem;
      height: 2px;
      background-color: var(--primary-color);
    }
  }
`;

const Facts = () => {
  return (
    <StyledSectionContainer>
      <StyledContentWrapper>
        <StyledH1>How a Membership Works</StyledH1>
        <StyledLogoSection>
          <StyledFactNumber>
            <span className="bulletPoint">Decide How Much & When</span>
            <span className="details">Choose from 3 basket sizes and 3 weekly pickup days over 3 seasons</span>
          </StyledFactNumber>
          <StyledFactNumber>
            <span className="bulletPoint">Get Recipes From Farmers & Other Members</span>
            <span className="details">Get weekly emails and get access our private Facebook group</span>
          </StyledFactNumber>
          <StyledFactNumber>
            <span className="bulletPoint">Feel Better</span>
            <span className="details">About your health and the source of your food</span>
          </StyledFactNumber>
        </StyledLogoSection>
      </StyledContentWrapper>
    </StyledSectionContainer>
  );
};

export default Facts;
