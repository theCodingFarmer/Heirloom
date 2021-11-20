import React from 'react';
import { CartProvider } from 'use-shopping-cart';

import getStripe from '../../../stripe/getStripe';

export default function Cart({ children }) {
    return (
        <CartProvider mode='checkout-session' stripe={getStripe()} currency={'usd'}>
            {children}
        </CartProvider>
    );
}
