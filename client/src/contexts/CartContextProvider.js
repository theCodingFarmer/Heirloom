import React, {createContext, useReducer, useState} from 'react';

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

const CartContextProvider = ({children}) => {
    const [shoppingCart, setShoppingCart] = useState({
        membershipCart: [],
        productCart: []
    });

    return (
        <CartStateContext.Provider value={shoppingCart}>
            <CartDispatchContext.Provider value={setShoppingCart}>
                { children }
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

export default CartContextProvider;
