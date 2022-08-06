import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React, {useContext} from 'react';
import Layout from '../../components/layout';
import TextLink from '../../components/links/text-link';
import SEO from '../../components/seo';
import { blogMenuLinks } from '../../components/_config/menu-links';
import {StyledH1, StyledH2} from '../../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../../components/_shared/styled-section';
import CsaMembershipSelection from '../../components/stripe/CsaMembershipSelection';
import {CartDispatchContext, CartStateContext} from '../../contexts/CartContextProvider';
import {locationObjectShape} from '../../prop-shapes/prop-type-shapes';

const Shop = ({data, location}) => {


  const addPricesToProduct = (productsArray, stripePricesData) => {
    console.log('productsArray', productsArray);
    console.log('stripePricesData', stripePricesData);

    const array = productsArray.nodes.map((product) => {

    })
  }

  addPricesToProduct(data.shopProducts, data.allStripeProductIds);

  const stripeCsaMembershipSelections = data.stripeCsaMembership.nodes;
  const pageDetails = data.pageDetails.nodes[0]

  const shoppingCart = useContext(CartStateContext);
  const setShoppingCart = useContext(CartDispatchContext)

console.log('data', data);
  return (
      <Layout location={location} menuLinks={blogMenuLinks}>
      <SEO title="Shop" />
      <StyledFullHeightSection>
        <button onClick={() => setShoppingCart({
          membershipCart: [...shoppingCart.membershipCart],
          productCart: [...shoppingCart.productCart, {id: Math.random(), qty: 1}]
        })}>Testing Order</button>
        <StyledH1>Shop</StyledH1>
        {<p>{pageDetails.csaSummary}</p>}
        <StyledH2>{`${pageDetails.season} Season -- ${pageDetails.seasonStatus}`}</StyledH2>
        <p>{pageDetails.seasonStatusSummary}</p>
        <CsaMembershipSelection seasonSizeSelections={stripeCsaMembershipSelections} />
        <StyledH2>Additional Products</StyledH2>
// products here
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

Shop.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.objectOf(locationObjectShape).isRequired
};

export const shopQuery = graphql`
  {
      shopProducts: allSanityShopProducts {
        nodes {
          shopProductsImage {
            asset {
              url
            }
          }
          shopProductsDescription
          shopProductsStatus
          shopProductsTitle
          shopProductsOptions {
            shopProductSelectableOptionTitle
            shopProductSelectableOptionStripeId
            _key
          }
        }
      }
      shopMembership: sanityShopCsaMembership(_id: {eq: "shopCsaMembership"}) {
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
      pageDetails: allSanityShopCsaMembership {
        nodes {
          seasonStatus
          seasonStatusSummary
          season
          csaSummary
        }
      }
      allStripeProductIds: allStripePrice(filter: {product: {active: {eq: true}}}) {
        nodes {
          unit_amount
          unit_amount_decimal
          product {
            active
            name
            id
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
