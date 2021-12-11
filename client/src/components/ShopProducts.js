import styled from '@emotion/styled';
import Img from 'gatsby-image';
import PropTypes, {number, string} from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import HighlightList from './HighlightList';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import {StyledImageContainer, StyledSanityImage, StyledSanityImageContainer} from './_shared/styled-image-container';
import { contentBox, flexCenter, flexEnd } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';
import {formatCurrencyString, useShoppingCart} from 'use-shopping-cart';

const StyledAvailableProduct = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  padding: 2.5rem 0;

  ${mq.gt.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
  &:nth-of-type(even) {
    direction: rtl;
  }
  &:nth-of-type(even) * {
    direction: ltr;
  }
`;
const StyledProductInfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;
`;
const StyledDescription = styled.section`
  ${contentBox}
  max-height: 180px;
  position: relative;
  padding: 10px;

  > p {
    height: 100%;
    margin: 0;
    font-size: 0.8rem;
    overflow: hidden;
  }
`;

const StyledArchiveContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;

const ShopProducts = (props) => {

    if (!props.products.length) {
        return null;
    }

    const {addItem, removeItem} = useShoppingCart();
    console.log('props', props);
    const products = props.products;

    const availableProducts = products.map((product, index) => {
        const id = product.node.id;
        const coverImage = product.node.shopProductsImage ? product.node.shopProductsImage : null;
        const title = product.node.shopProductsTitle;
        const description = product.node.shopProductsDescription;
        const price = product.node.pricingShopProducts;

        return (
            <StyledAvailableProduct key={id}>
                {coverImage && (
                    <StyledSanityImageContainer>
                        <StyledSanityImage {...coverImage}/>
                    </StyledSanityImageContainer>
                )}
                <StyledProductInfoContainer>
                    <StyledH2>{title}</StyledH2>
                    <StyledDescription dangerouslySetInnerHTML={{__html: description}} />
                    <h3>
                        {formatCurrencyString({
                            value: price,
                            currency: 'usd',
                        })}
                    </h3>
                    <button onClick={() => addItem(id)}>Add to cart</button>
                    <button onClick={() => removeItem(id)}>Remove</button>
                </StyledProductInfoContainer>
            </StyledAvailableProduct>
        );
    });

    return (
        <StyledSection id="projects">
            <StyledH1>Additional Products</StyledH1>
            {availableProducts}
        </StyledSection>
    );
};

ShopProducts.propTypes = {
  products: PropTypes.arrayOf(
      PropTypes.shape({
          node: {
              id: string,
              pricingShopProducts: number,
              shopProductAdditionalOptions: [],
              shopProductsDescription: string,
              shopProductsImage: {
                  asset: {
                      url: string
                  }
              },
              shopProductsTitle: string
          }
      })),
};

export default ShopProducts;
