import React, {createContext, useReducer} from 'react';

export const CartStateContext = createContext();
export const CartDispatchContext = createContext();

export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_MEMBERSHIP = "ADD_MEMBERSHIP";
export const REMOVE_MEMBERSHIP = "REMOVE_MEMBERSHIP";

const initialState = {};

const addProductToCart = (productStripeId, state) => {
    console.log(`added product id: ${productStripeId}`);
}

const removeProductFromCart = (productStripeId, state) => {
    console.log(`removed product id: ${productStripeId}`);
}

const reducer = (state, action) => {
   switch (action.type) {
       case ADD_PRODUCT:
           return addProductToCart(action.productStripeId, state);
       case REMOVE_PRODUCT:
           return removeProductFromCart(action.productStripeId, state);
       default:
           return state;
   }
}

const CartContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CartStateContext value={state}>
            <CartDispatchContext value={dispatch}>
                {children}
            </CartDispatchContext>
        </CartStateContext>
    )
}

export default CartContextProvider;
