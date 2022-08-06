import styled from '@emotion/styled';
import React, {useContext} from 'react';
import { Link } from 'gatsby';
import {HeirloomIcon, Icon} from '../icon';
import { flexCenter } from './../_shared/styled-mixins';
import {mq} from '../_shared/media';
import {GlobalDispatchContext, GlobalStateContext} from '../../contexts/GlobalContextProvider';
import PropTypes from 'prop-types';

export const StyledAnchorLink = styled(Link)`
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
  max-width: 300px;

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

export const StyledMenuButton = styled.button`
  ${flexCenter};
  position: relative;
  border: none;
  padding: 0.4rem 0.8rem;
  font-size: 1.2rem;
  background-color: transparent;

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

const StyledMobileButtonContainer = styled.div`
  ${flexCenter};

  ${mq.gt.sm} {
    display: none;
  }
`;

export const StyledHeaderButtonLink = styled(Link)`
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
        <StyledAnchorLink to={link ? link : '#'} style={{marginTop: 20}}>
          {label}
          <Icon icon="arrow-right" />
        </StyledAnchorLink>
      )}
    </React.Fragment>
  );
};

export const HeaderButtonLink = ({ label, link }) => {
  return (
      <React.Fragment>
        {label && link && (
            <StyledHeaderButtonLink to={link ? link : '#'}>
              {label}
            </StyledHeaderButtonLink>
        )}
      </React.Fragment>
  );
};

export const ButtonHamburgerMenu = () => {

    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);

    return (
      <React.Fragment>
            <StyledMenuButton type='button' onClick={() => {dispatch({type: 'toggle_menu'})}}>
              <Icon icon={state.isMenuShown ? 'window-close' : 'bars'} />
            </StyledMenuButton>
      </React.Fragment>
  );
};

export const HeaderShoppingCartButton = () => {
    return (
        <div>
            <Link to={'/shop/cart'}>
                <HeirloomIcon
                    icon={'vegBox'}
                    size={36}
                    style={{fill: 'var(--title-color-light)'}}
                />
            </Link>
            <div>
                <span>0</span>
            </div>
        </div>
    );
};

export const HamburgerMenuAndCartButtons = () =>
    <React.Fragment>
        <StyledMobileButtonContainer>
            <HeaderShoppingCartButton/>
            <ButtonHamburgerMenu />
        </StyledMobileButtonContainer>
    </React.Fragment>;
