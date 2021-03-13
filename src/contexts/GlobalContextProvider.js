import React from 'react';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    isMenuShown: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case "toggle_menu":
            return {
                ...state,
                isMenuShown: !state.isMenuShown
            }
        case "toggle_menu_hidden":
            return {
                ...state,
                isMenuShown: false
            }
        case "toggle_menu_shown":
            return {
                ...state,
                isMenuShown: true
            }

        default:
            return state
    }
};

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState)

    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                { children }
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
};

export default GlobalContextProvider;
