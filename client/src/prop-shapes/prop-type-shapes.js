import PropTypes from 'prop-types';

export const menuLinksShape = PropTypes.shape({
    icon: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
});

export const locationObjectShape = PropTypes.shape({
    location: PropTypes.string
});

export const menuLinkObjectShape = PropTypes.shape(    {
    name: PropTypes.string,
    link: PropTypes.string,
    icon: PropTypes.string
});

export const headerDataShape = PropTypes.shape({
    label: PropTypes.string,
    link: PropTypes.string,
})
