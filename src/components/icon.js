import React from 'react';
import * as PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import iconPath from '../assets/iconLib';

const defaultStyles = {display: 'inline-block', verticalAlign: 'middle'};

export const Icon = ({ icon, prefix = 'fas' }) => <FontAwesomeIcon icon={[prefix, icon]} size="lg" />;

export const HeirloomIcon = ({ size, color, icon, className, style}) =>  {
    const styles = {...defaultStyles, ...style };
    return (
        <svg
            aria-hidden={true}
            focusable={false}
            className={className}
            style={styles}
            viewBox='0 0 512 512'
            width={`40px`}
            height={`40px`}
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
    color: 'black',
    style: {
        overflow: 'hidden',
        marginRight: '0.75rem',
        lineHeight: '0.75rem',
    },
}

HeirloomIcon.propTypes = {
    size: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    viewBox: PropTypes.string.isRequired,
    style: PropTypes.shape(PropTypes.object),
    className: PropTypes.string,
};

