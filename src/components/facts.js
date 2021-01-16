import styled from '@emotion/styled';
import React from 'react';
import { StyledH1 } from './_shared/styled-headings';

const StyledSectionContainer = styled.section`
  margin: 0 0 6rem 0;
  position: relative;
  padding: calc(100% * 0.09719) 0;

  & > .content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5em;
    position: relative;
    
    /* uncomment for debuggind purposes */
    /* border: 2px dashed #fff8; */
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
    background-color: var(--bg-content-color);
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

  & > .number {
    margin-left: 2rem;
    margin-bottom: 1rem;
    font-size: 2rem;
    font-weight: bold;
  }

  & > .fact {
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
        <StyledH1>Some Interesting Facts</StyledH1>
        <StyledLogoSection>
          <StyledFactNumber>
            <span className="number">127</span>
            <span className="fact">Finished Projects</span>
          </StyledFactNumber>
          <StyledFactNumber>
            <span className="number">321</span>
            <span className="fact">Happy Customers</span>
          </StyledFactNumber>
          <StyledFactNumber>
            <span className="number">863</span>
            <span className="fact">Freelancing Hours</span>
          </StyledFactNumber>
        </StyledLogoSection>
      </StyledContentWrapper>
    </StyledSectionContainer>
  );
};

export default Facts;
