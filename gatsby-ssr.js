const React = require('react');
const GlobalContextProvider = require('./src/contexts/GlobalContextProvider')

exports.wrapRootElement = ({ element }) => {
    return (
        <GlobalContextProvider>
            {element}
        </GlobalContextProvider>
    )
};
