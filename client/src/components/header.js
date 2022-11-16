import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import logo from '../images/heirloom.png';
import { mq } from './_shared/media';
import {StyledSpan} from './_shared/styled-headings';
import {ButtonHamburgerMenu, HeaderButtonLink} from './links/button-link';
import {GlobalDispatchContext} from '../contexts/GlobalContextProvider';

const StyledHeader = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: var(--header-height);
  flex-shrink: 0;
  background-color: var(--header-color);
  border-bottom: 2px solid var(--primary-color);
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-left);
  z-index: 1;
`;
const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  padding: 0 calc((var(--space) / 2));
`;
const StyledHomeLink = styled(Link)`
  text-decoration: none;
`;
const StyledLogo = styled('img')`
  position: absolute;
  top: 0;
  border-radius: 0px 0px 14px 14px;
  height: calc(1.3 * var(--header-height));
  width: auto;
  z-index: 2;
`;
const StyledNav = styled.nav`
  flex: 1;
  height: 100%;
  display: none;

  ${mq.gt.sm} {
    display: flex;
    align-items: stretch;
    margin-left: 9rem;
  }

  & > a {
    color: var(--title-color-light);
    &:hover {
      color: var(--primary-color);
    }
  }
`;
const StyledNavLink = styled(Link)`
  position: relative;
  margin: 0 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 100%;
    bottom: 0;
    background: var(--primary-color);
    height: 2px;
    transition: right var(--transition-fast) ease-out;
  }

  &:hover:before {
    right: 0;
  }
`;

const Header = ({ menuLinks, headerData }) => {

    const dispatch = useContext(GlobalDispatchContext);

    return (
        <StyledHeader>
            <StyledContainer>
                <StyledHomeLink title="Heirloom Farm" to="/"
                                onClick={() => setTimeout(dispatch({type: 'toggle_menu_hidden'}), 500)}
                >
                    <StyledLogo src={logo} />
                </StyledHomeLink>
                <StyledNav>
                    {menuLinks.map((link, index) => (
                        <StyledNavLink key={link.name} to={link.link} activeClassName="active">
                            <StyledSpan>{link.name}</StyledSpan>
                        </StyledNavLink>
                    ))}
                </StyledNav>
                <HeaderButtonLink label={headerData.label} link={headerData.link} />
                <ButtonHamburgerMenu />
            </StyledContainer>
        </StyledHeader>
    )
};

export default Header;

const menuLinksPropTypeShape = PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
});

Header.propTypes = {
    menuLinks: PropTypes.arrayOf(menuLinksPropTypeShape).isRequired,
};
