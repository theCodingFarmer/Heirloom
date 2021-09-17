import styled from '@emotion/styled';
import {mq} from './media';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 95%;
  padding: calc(var(--header-height) + 3rem) 0 1rem 0;
  max-width: 1000px;
  margin-bottom: 60px;
`;

export const StyledSectionHero = styled.section`
  margin: 0 auto;
  max-width: 1000px;
`;


export const StyledFullHeightSection = styled(StyledSection)`
  padding-top: calc(var(--header-height) + 5rem);
  min-height: calc(100vh - var(--header-height));
  justify-content: start;
  
  ${mq.lt.lg} { 
      padding-top: calc(var(--header-height) + 6rem);
  } 
`;
