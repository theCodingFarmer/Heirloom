import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import Icon from './icon';
import { mq } from './_shared/media';
import { flexCenter } from './_shared/styled-mixins';
import {StyledNavigationSpan} from './_shared/styled-headings';
import {GlobalStateContext} from '../contexts/GlobalContextProvider';

const StyledNav = styled.nav`
  background-color: var(--header-color);
  border-top: 1px solid var(--border-color);
  flex: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1rem;
  position: fixed;
  top: calc(var(--header-height) - 2px);
  right: 0;
  z-index: 0;

  ${mq.gt.sm} {
    display: none;
  }
`;
const StyledNavLink = styled(Link)`
  ${flexCenter};
  border-top: 1px solid var(--primary-color);
  flex-direction: column;
  flex-shrink: 1;
  text-decoration: none;
  color: var(--title-color-light) !important;
  font-size: 0.8rem;
  line-height: 1;
  position: relative;
  height: calc(var(--header-height) + 10px);
  width: 120px;

  > svg {
    margin-bottom: 0.4rem;
    fill: var(--title-color-light);
  }

  &.active {
    font-weight: 700;
    border-bottom: none !important;
    border-top: 2px solid var(--primary-color);

    & > svg {
      fill: var(--primary-color);
    }
  }
  &:hover {
    color: var(--primary-color) !important;

    & > svg {
      fill: var(--primary-color);
    }
  }
`;

// Note: The NavigationBar component should only be used for up to 5 menu links
const NavigationBar = ({menuLinks}) => {

    const state = useContext(GlobalStateContext);

  return (
      state.isMenuShown ?
          <StyledNav>
            {menuLinks.map((link, index) => (
                <StyledNavLink key={link.name} to={link.link} activeClassName="active">
                  <Icon icon={link.icon} />
                  <StyledNavigationSpan>
                    {link.name}
                  </StyledNavigationSpan>
                </StyledNavLink>
            ))}
          </StyledNav>
          : null
  );
};

const menuLinksPropTypeShape = PropTypes.shape({
    name: PropTypes.string,
    link: PropTypes.string,
});

NavigationBar.propTypes = {
    menuLinks: PropTypes.arrayOf(menuLinksPropTypeShape).isRequired,
};

export default NavigationBar;
