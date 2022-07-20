import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';
import CsaMembershipSelection from '../components/stripe/CsaMembershipSelection';
import {CartDispatchContext, CartStateContext} from '../contexts/CartContextProvider';

const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;

const Shop = ({data}) => {

const stripeCsaMembershipSelections = data.stripeCsaMembership.nodes;

  const shoppingCart = useContext(CartStateContext);
  const setShoppingCart = useContext(CartDispatchContext)
console.log('shoppingCart', shoppingCart);
  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Shop" />
      <StyledFullHeightSection>
        <StyledTagsH1>Shop</StyledTagsH1>
        <StyledSeparator />
          <button onClick={() => setShoppingCart({
              membershipCart: [...shoppingCart.membershipCart],
              productCart: [...shoppingCart.productCart, {id: Math.random(), qty: 1}]
          })}>Testing Order</button>
        <CsaMembershipSelection seasonSizeSelections={stripeCsaMembershipSelections} />
        <StyledSeparator />
// products here
        <StyledSeparator />
        <TextLink label="Take me home" link="/" />
      </StyledFullHeightSection>
    </Layout>
  );
};

Shop.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};
export default Shop;

export const shopQuery = graphql`
  {
      products: allMarkdownRemark(
        limit: 3
        sort: { order: DESC, fields: frontmatter___date }
        filter: { fileAbsolutePath: { regex: "/content/shop/" }, frontmatter: { available: { eq: true } } }
      ) {
        nodes {
          frontmatter {
            date(formatString: "D MMMM, YYYY")
            title
            price
            options
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
      csaMembership: sanityShopCsaMembership(_id: {eq: "shopCsaMembership"}) {
        season
        seasonStatus
        seasonStatusSummary
        csaSummary
        seasonDetailsSpring {
          shareSeasonStatus
          totalWeeks
          seasonStart
          seasonEnd
          availableProduce {
            title
          }
          csaBasketSizePricingSmall {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
          csaBasketSizePricingMedium {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
          csaBasketSizePricingLarge {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
        }
        seasonDetailsSummer {
          shareSeasonStatus
          totalWeeks
          seasonStart
          seasonEnd
          availableProduce {
            title
          }
          csaBasketSizePricingSmall {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
          csaBasketSizePricingMedium {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
          csaBasketSizePricingLarge {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
        }
        seasonDetailsFall {
          shareSeasonStatus
          totalWeeks
          seasonStart
          seasonEnd
          availableProduce {
            title
          }
          csaBasketSizePricingSmall {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
          csaBasketSizePricingMedium {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
          csaBasketSizePricingLarge {
            csaBasketSizePricingStatus
            csaBasketSizePricingStripeId
          }
        }
      }
      stripeCsaMembership:   allStripePrice(filter: {active: {eq: true}, product: {metadata: {category: {eq: "membership"}}}}) {
        nodes {
          active
          unit_amount
          product {
            name
            metadata {
              category
              inventoryWt
              season
              size
            }
            id
          }
          unit_amount_decimal
          id
        }
      }
  }
`;
