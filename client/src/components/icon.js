import React from 'react';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconPath from '../assets/iconLib';

const defaultStyles = {display: 'inline-block'};

export const Icon = ({ icon, prefix = 'fas' }) => <FontAwesomeIcon icon={[prefix, icon]} size="lg" />;

export const HeirloomIcon = ({size, color, icon, style}) =>  {
    const styles = {...defaultStyles, ...style };
    return (
        <svg
            aria-hidden={true}
            focusable={false}
            style={styles}
            viewBox='0 0 512 512'
            width={`${size}px`}
            height={`${size}px`}
            role={'img'}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill={color}
                d={iconPath[icon]}
            />
        </svg>
    );
};

HeirloomIcon.defaultProps = {
    size: 40,
    style: {overflow: 'hidden'}
}

HeirloomIcon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string,
    icon: PropTypes.string.isRequired,
    viewBox: PropTypes.string,
    style: PropTypes.shape(PropTypes.object),
    className: PropTypes.string,
};

