import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import {Icon} from './icon';

const StyledHighLightContainer = styled.section`
  margin-top: 0.8rem;
  display: flex;
  flex-wrap: wrap;
`;
const StyledTag = styled.span`
  display: flex;
  align-items: center;
  white-space: nowrap;
  font-size: 0.8rem;

  color: var(--paragraph-text-accent);
  margin: 0 1rem 0.5rem 0;

  & > svg {
    color: var(--primary-color);
    height: 0.8rem;
    margin-right: 0.25rem;
  }
`;

const HighlightList = ({ highlights }) => {
  return (
    <StyledHighLightContainer>
      {highlights.map((highlight) => (
        <StyledTag key={highlight}>
          <Icon icon="caret-right" />
          {highlight}
        </StyledTag>
      ))}
    </StyledHighLightContainer>
  );
};

HighlightList.propTypes = {
  highlights: PropTypes.array.isRequired,
};

export default HighlightList;
