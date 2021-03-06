import styled from '@emotion/styled';
import React from 'react';
import Icon from '../icon';
import { flexCenter } from './../_shared/styled-mixins';
import {mq} from '../_shared/media';

export const StyledButtonLink = styled.a`
  ${flexCenter};
  text-decoration: none;
  color: var(--bg-content-color) !important;
  background-color: var(--title-color-light);
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;

  &:hover {
    color: var(--primary-color) !important;
  }

  &:after {
    content: '';
    z-index: -1;
    border: 1px solid var(--title-color-light);
    position: absolute;
    bottom: -3px;
    right: -3px;
    width: 100%;
    height: 100%;
    transition: all ease var(--transition-fast);
  }

  &:hover:after {
    border: 1px solid var(--primary-color);
    bottom: -5px;
    right: -5px;
  }

  & > svg {
    fill: var(--bg-content-color);
    height: 0.8rem;
    margin-left: 0.25rem;
  }

  &:hover > svg {
    fill: var(--primary-color);
  }
`;

export const StyledMenuLink = styled.a`
  ${flexCenter};
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;

  & > svg {
    color: var(--title-color-light);
  }

  &:hover > svg {
    color: var(--primary-color);
  }
  
  ${mq.gt.sm} {
    display: none;
  }
`;

export const StyledHeaderButtonLink = styled.a`
  ${flexCenter};
  display: none;
  text-decoration: none;
  color: var(--primary-color) !important;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: 1px solid var(--title-color-light);
  padding: 0.4rem 0.8rem;

  &:hover {
    color:  var(--title-color-light) !important;
    border: 1px solid var(--primary-color) !important;
    font-weight: 600;
  }
  
  ${mq.gt.sm} {
    display: flex;
  }
`;

export const ButtonLink = ({ label, link }) => {
  return (
    <React.Fragment>
      {label && link && (
        <StyledButtonLink href={link ? link : '#'} target="_blank" rel="noopener">
          {label}
          <Icon icon="arrow-right" />
        </StyledButtonLink>
      )}
    </React.Fragment>
  );
};

export const HeaderButtonLink = ({ label, link }) => {
  return (
      <React.Fragment>
        {label && link && (
            <StyledHeaderButtonLink href={link ? link : '#'} target="_blank" rel="noopener">
              {label}
            </StyledHeaderButtonLink>
        )}
      </React.Fragment>
  );
};

export const ButtonHamburgerMenu = () => {
  return (
      <React.Fragment>
            <StyledMenuLink href={'#'} target="_blank" rel="noopener">
              <Icon icon={'bars'} />
            </StyledMenuLink>
      </React.Fragment>
  );
};

