import styled from '@emotion/styled';
import React from 'react';

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

const StyledH1 = styled.h1`
    color: var(--title-color-light);
    width: 100%;
    position: relative;
    font-weight: 800;
    margin: 20px 0;

    &:first-letter {
        color: var(--primary-color);
    }

    &:after {
        background-color: var(--primary-color);
        content: '';
        position: absolute;
        top: -30px;
        left: 0;
        width: 30px;
        height: 2px;
    }
`;

const StyledContentWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  max-width: 1000px;
`;

const StyledBulletPoints = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  flex-direction: column;
`;

const StyledFactNumber = styled.section`
  color: var(--title-color-light);
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > .bulletPoint {
    margin-left: 1rem;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  & > .details {
    color: var(--title-color-dark);
    position: relative;
    text-transform: uppercase;
    font-size: 0.8rem;
    padding: 0.5rem 1rem;
    background-color: var(--primary-color);
    margin-left: 1rem;
    border-radius: 1rem;
    
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
        <StyledH1>How Our CSA Works</StyledH1>
        <StyledBulletPoints>
          <StyledFactNumber>
            <span className="bulletPoint">Decide How Much & When</span>
            <span className="details">Choose from 3 basket sizes and 3 weekly pickup days over 3 seasons</span>
          </StyledFactNumber>
          <StyledFactNumber>
            <span className="bulletPoint">Get Recipes From Farmers & Other Members</span>
            <span className="details">Get weekly emails and get access our private Facebook community</span>
          </StyledFactNumber>
          <StyledFactNumber>
            <span className="bulletPoint">Feel Better</span>
            <span className="details">About your health and the source of your food</span>
          </StyledFactNumber>
        </StyledBulletPoints>
      </StyledContentWrapper>
    </StyledSectionContainer>
  );
};

export default HowMembershipWorks;
