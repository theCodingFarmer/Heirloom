import styled from '@emotion/styled';
import React from 'react';
import { StyledH1 } from './_shared/styled-headings';

const StyledSectionContainer = styled.section`
  margin: 0 0 6rem 0;
  position: relative;
  padding: 3rem 0;

  & > .content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5em;
    position: relative;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--overlay-bg-content-color);
    background-image: var(--overlay-bg-image-pattern);
    box-shadow: inset 0 -15px 0 -10px rgba(27,27,27,0.1), inset 0 15px 0 -10px rgba(27,27,27,0.1);
  }
`;

const StyledContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
`;

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

const HowMembershipWorks = () => {
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

export default HowMembershipWorks;
