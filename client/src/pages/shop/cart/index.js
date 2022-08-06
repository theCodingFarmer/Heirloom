import styled from '@emotion/styled';
import React, {useContext} from 'react';
import SmileyDead from '../../../assets/smiley-dead.svg';
import Layout from '../../../components/layout';
import TextLink from '../../../components/links/text-link';
import SEO from '../../../components/seo';
import { blogMenuLinks } from '../../../components/_config/menu-links';
import { flexCenter } from '../../../components/_shared/styled-mixins';
import { StyledSection } from '../../../components/_shared/styled-section';
import {CartDispatchContext, CartStateContext} from '../../../contexts/CartContextProvider';
import PropTypes from 'prop-types';
import {locationObjectShape} from '../../../prop-shapes/prop-type-shapes';
import {HeirloomIcon} from '../../../components/icon';
import {StyledH1} from '../../../components/_shared/styled-headings';

const StyledCartSection = styled(StyledSection)`
  margin-top: var(--header-height);
  min-height: calc(100vh - var(--header-height) - 60px);
  justify-content: space-between;
`;

const StyledEmptyBasketContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;

  & > h4 {
    margin-top: 0.5rem;
  }
`;

const StyledIntroduction = styled.div`
  color: var(--primary-color);
  margin-left: 3px;
  font-weight: normal;
`;

const StyledDescription = styled.p`
  padding: 0 0.5rem;
  margin: 0;
`;

const Cart = ({location}) => {
  const shoppingCart = useContext(CartStateContext);
  const setShoppingCart = useContext(CartDispatchContext)

  const isBasketEmpty = shoppingCart?.membershipCart.length === 0 && shoppingCart?.productCart.length === 0;

  const shoppingLinkText = isBasketEmpty ? 'Start shopping' : 'Continue shopping';

  return (
      <Layout location={location} menuLinks={blogMenuLinks}>
        <StyledCartSection>
          <SEO title="Shopping Cart" />
            <StyledH1>My Shopping Basket</StyledH1>
              {
                  isBasketEmpty &&
                  <StyledEmptyBasketContainer>
                      <HeirloomIcon
                          icon={'vegBox'}
                          size={148}
                          style={{fill: 'var(--paragraph-text-accent)'}}
                      />
                      <h4>Your shopping basket is empty.</h4>
                      <TextLink label={shoppingLinkText} link="/shop" />
                  </StyledEmptyBasketContainer>
              }
              {
                  shoppingCart?.membershipCart.length > 0 &&
                    <div>
                      <h4>Membership</h4>
                      {shoppingCart.membershipCart.map((item) =>
                          <div>
                            <p>{`${item.qty}x -- Item: ${item.id}`}</p>
                          </div>
                      )}
                    </div>
              }
              {
                    shoppingCart?.productCart.length > 0 &&
                    <div>
                      <h4>Products</h4>
                      {shoppingCart.productCart.map((item) =>
                          <div>
                            <p>{`${item.qty}x -- Item: ${item.id}`}</p>
                          </div>
                      )}
                    </div>
              }
        </StyledCartSection>
      </Layout>
  )
};

export default Cart;

Cart.propTypes = {
    location: PropTypes.objectOf(locationObjectShape).isRequired
};
