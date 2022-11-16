import styled from '@emotion/styled';
import React from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import {Icon} from './icon';
import { flexCenter } from './_shared/styled-mixins';

const StyledContainer = styled.div`
  ${flexCenter};
  max-height: 50px;
  max-width: 50px;
  padding: 0.5rem;
  cursor: pointer;
  color: var(--title-color-light);

  &:hover {
    background-color: var(--secondary-color);
    border-radius: var(--radius);
  }
`;

const ScrollToTop = () => {
  return (
    <ScrollUpButton
      ContainerClassName="scroll-top-button-container"
      TransitionClassName="scroll-top-button-transition"
      ShowAtPosition={500}
      AnimationDuration={200}
    >
      <StyledContainer title="Scroll to top">
        <Icon icon="arrow-up" />
      </StyledContainer>
    </ScrollUpButton>
  );
};

ScrollToTop.propTypes = {};

export default ScrollToTop;
