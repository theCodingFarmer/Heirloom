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

const StyledCartSection = styled(StyledSection)`
  min-height: 100vh;
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
console.log('shoppingCart', shoppingCart);
  return (
      <Layout location={location} menuLinks={blogMenuLinks}>
        <StyledCartSection>
          <SEO title="Shopping Cart" />
          <StyledCartSection>
              {
                  shoppingCart?.membershipCart.length === 0 && shoppingCart?.productCart.length === 0 &&
                  <h1>Your cart is empty.</h1>
              }

              {
                  shoppingCart?.membershipCart.length > 0 &&
                    <div>
                      <h1>Membership</h1>
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
                      <h1>Products</h1>
                      {shoppingCart.productCart.map((item) =>
                          <div>
                            <p>{`${item.qty}x -- Item: ${item.id}`}</p>
                          </div>
                      )}
                    </div>
              }
          </StyledCartSection>
          <TextLink label="Take me home" link="/" />
        </StyledCartSection>
      </Layout>
  )
};

export default Cart;

Cart.propTypes = {
    location: PropTypes.objectOf(locationObjectShape).isRequired
};
