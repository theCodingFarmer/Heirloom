import styled from '@emotion/styled';
import React from 'react';
import { mq } from './_shared/media';


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
  flex-direction: row;
  align-items: flex-start;
  padding: 1rem 0.5rem;
  margin-bottom: -1px;
  border-top: 1px solid var(--primary-color);
  border-bottom: 1px solid var(--primary-color);
`;

const StyledBullet = styled.h1`
  align-self: center;
  font-size: 3rem;
  font-weight: bold;
  color: var(--title-color-light);
   
   ${mq.gt.sm} {
   padding: 0 1rem;
   font-size: 4rem;;
  }
`;

const StyledFactContentWrapper = styled.div `
  flex-direction: column;
  padding: 0.5rem;
`;

const StyledFactHighlight = styled.h1`
  color: var(--primary-color);
  font-size: 1.3rem;
  font-weight: bold;
  
  ${mq.gt.sm} {
   font-size: 2.0rem;;
  }
`;

const StyledFactDetails = styled.section`
  color: var(--title-color-light);
  font-size: 0.8rem;
  
  ${mq.gt.sm} {
   font-size: 1.0rem;;
  }
`;

const HowMembershipWorks = () => {
  return (
    <StyledSectionContainer>
      <StyledContentWrapper>
        <StyledH1>How Our CSA Works</StyledH1>
        <StyledBulletPoints>
          <StyledFactNumber>
            <StyledBullet>1.</StyledBullet>
            <StyledFactContentWrapper>
              <StyledFactHighlight>Decide How Much & When</StyledFactHighlight>
              <StyledFactDetails>Customize your own share that fits your needs. Choose from 3 basket sizes and 3 weekly pickup days over 3 seasons</StyledFactDetails>
            </StyledFactContentWrapper>
          </StyledFactNumber>
          <StyledFactNumber>
            <StyledBullet>2.</StyledBullet>
            <StyledFactContentWrapper>
              <StyledFactHighlight>Get Information & Recipes</StyledFactHighlight>
              <StyledFactDetails>Get special access to recipes. Also be a part of our private member community with direct communication with the farmers</StyledFactDetails>
            </StyledFactContentWrapper>
          </StyledFactNumber>
          <StyledFactNumber>
            <StyledBullet>3.</StyledBullet>
            <StyledFactContentWrapper>
              <StyledFactHighlight>Feel Better</StyledFactHighlight>
              <StyledFactDetails>Take positive steps toward your health and know the source of your food</StyledFactDetails>
            </StyledFactContentWrapper>
          </StyledFactNumber>
        </StyledBulletPoints>
      </StyledContentWrapper>
    </StyledSectionContainer>
  );
};

export default HowMembershipWorks;
