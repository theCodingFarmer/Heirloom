import styled from '@emotion/styled';
import React, {useContext} from 'react';
import { Link } from 'gatsby';
import {HeirloomIcon, Icon} from '../icon';
import { flexCenter } from './../_shared/styled-mixins';
import {mq} from '../_shared/media';
import {GlobalDispatchContext, GlobalStateContext} from '../../contexts/GlobalContextProvider';

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
  padding-left: ${props => props.isMenuShown ? '1rem' : '1.2rem'};
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

const StyledCartCounter = styled.span`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: -24px;
    left: 10px;
    background-color: red;
    border-radius: 50%;
    color: var(--title-color-light);
    font-size: 0.70rem;
    font-weight: 600;
    height: 1.2rem;
    width: 1.2rem;
`;

const StyledMobileButtonContainer = styled.div`
  ${flexCenter};

  ${mq.gt.sm} {
    display: none;
  }
`;

const StyledDesktopLinkAndCartButtonContainer = styled.div`
  ${flexCenter};
  display: none;

  ${mq.gt.sm} {
    display: flex;
  }
`;

export const StyledHeaderButtonLink = styled(Link)`
  ${flexCenter};
  text-decoration: none;
  color: var(--primary-color) !important;
  font-size: 0.9rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border: 1px solid var(--title-color-light);
  padding: 0.4rem 0.8rem;
  margin-right: ${props => props.hasCartItems ? "0.9rem" : "1.8rem"};

  &:hover {
    color:  var(--title-color-light) !important;
    border: 1px solid var(--primary-color) !important;
    font-weight: 600;
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

const HeaderButtonLink = ({ hasCartItems, label, link }) => {
  return (
      <React.Fragment>
        {label && link && (
            <StyledHeaderButtonLink hasCartItems={hasCartItems} to={link ? link : '#'}>
              {label}
            </StyledHeaderButtonLink>
        )}
      </React.Fragment>
  );
};

const ButtonHamburgerMenu = () => {

    const dispatch = useContext(GlobalDispatchContext);
    const state = useContext(GlobalStateContext);

    return (
      <React.Fragment>
            <StyledMenuButton isMenuShown={state.isMenuShown} type='button' onClick={() => {dispatch({type: 'toggle_menu'})}}>
              <Icon icon={state.isMenuShown ? 'window-close' : 'bars'} />
            </StyledMenuButton>
      </React.Fragment>
  );
};

const HeaderShoppingCartButton = ({iconSize, shoppingCartTotalItems}) =>
    <div>
        {Boolean(shoppingCartTotalItems) && <StyledCartCounter>{shoppingCartTotalItems}</StyledCartCounter>}
        <Link to={'/shop/cart'}>
            <HeirloomIcon
                icon={'vegBox'}
                size={iconSize}
                style={{fill: 'var(--title-color-light)'}}
            />
        </Link>
    </div>;

export const DesktopLinkAndCartButton = ({label, link, showLink, shoppingCartTotalItems}) =>
    <StyledDesktopLinkAndCartButtonContainer>
        {showLink && <HeaderButtonLink label={label} link={link} hasCartItems={shoppingCartTotalItems}/>}
        <HeaderShoppingCartButton iconSize={46} shoppingCartTotalItems={shoppingCartTotalItems}/>
    </StyledDesktopLinkAndCartButtonContainer>;


export const HamburgerMenuAndCartButtons = ({shoppingCartTotalItems}) =>
    <React.Fragment>
        <StyledMobileButtonContainer>
            <HeaderShoppingCartButton iconSize={36} shoppingCartTotalItems={shoppingCartTotalItems}/>
            <ButtonHamburgerMenu />
        </StyledMobileButtonContainer>
    </React.Fragment>;
