import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import TextLink from '../components/links/text-link';
import SEO from '../components/seo';
import { blogMenuLinks } from '../components/_config/menu-links';
import { StyledH1 } from '../components/_shared/styled-headings';
import { StyledFullHeightSection } from '../components/_shared/styled-section';
import { StyledSeparator } from '../components/_shared/styled-separator';
import ShopProducts from '../components/ShopProducts';
import Cart from '../components/stripe/Cart';
import CartSummary from '../components/stripe/CartSummary';
import CsaMembershipSelection from '../components/stripe/CsaMembershipSelection';
import {CartProvider, useShoppingCart} from 'use-shopping-cart';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.GATSBY_STRIPE_PUBLISHABLE_KEY);


const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;

const Shop = ({data}) => {
console.log('stripeData', data.stripeCsaMembership.nodes);
console.log('stripeAdditionalProducts', data.stripeAdditionalProducts.nodes);

const stripeCsaMembershipSelections = data.stripeCsaMembership.nodes;
const stripeAdditionalProducts = data.stripeAdditionalProducts.nodes;
  return (
    <Layout menuLinks={blogMenuLinks}>
      <SEO title="Shop" />
      <StyledFullHeightSection>
        <StyledTagsH1>Shop</StyledTagsH1>
        <StyledSeparator />
        <CsaMembershipSelection seasonSizeSelections={stripeCsaMembershipSelections} />
        <StyledSeparator />
        {/*<Cart>*/}
        {/*  <ShopProducts products={data.allSanityShopProducts.edges}/>*/}
        {/*  <CartSummary/>*/}
        {/*</Cart>*/}
        <Cart/>
        <div>
          {
            stripeAdditionalProducts.map((stripeProduct) => {
              const {addItem} = useShoppingCart();
                  return (
                      <div>
                        <p>{stripeProduct.product.name}</p>
                        <button
                            onClick={() => addItem({
                              sku: stripeProduct.product.id,
                              name: stripeProduct.product.name,
                              price: stripeProduct.product.unit_amount,
                              currency: stripeProduct.product.currency,
                              image: stripeProduct.product.images
                            })}
                        >
                          Buy Me
                        </button>
                      </div>
                  );
            })
          }
        </div>
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
      allSanityShopProducts(filter: {shopProductsStatus: {eq: true}}) {
        edges {
          node {
            id
            shopProductsImage {
              asset {
                _id
                altText
                url
              }
            }
            shopProductsStatus
            shopProductsTitle
            shopProductsDescription
            pricingShopProducts
            shopProductsAdditionalOptions {
              shopProductsOptionTitle
              shopProductsSelectableOptions {
                pricingShopProductSelectableOption
                shopProductSelectableOptionChoice
              }
            }
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
      stripeAdditionalProducts: allStripePrice(filter: {active: {}, product: {metadata: {category: {eq: "products"}}, active: {eq: true}}}) {
        nodes {
          unit_amount
          product {
            name
            id
            metadata {
              category
            }
            active
            images
          }
          currency
        }
    }
  }
`;
