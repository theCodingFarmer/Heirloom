import React from 'react';
import GlobalContextProvider from './src/contexts/GlobalContextProvider';
import CartContextProvider from './src/contexts/CartContextProvider';

export const wrapRootElement = ({element}) => {
    return (
        <CartContextProvider>
            <GlobalContextProvider>
                {element}
            </GlobalContextProvider>
        </CartContextProvider>
    )
};
