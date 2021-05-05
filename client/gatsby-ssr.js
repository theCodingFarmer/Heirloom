const React = require('react');
const GlobalContextProvider = require('./src/contexts/GlobalContextProvider').default;

exports.wrapRootElement = ({ element }) => {
    return (
        <GlobalContextProvider>
            {element}
        </GlobalContextProvider>
    )
};
