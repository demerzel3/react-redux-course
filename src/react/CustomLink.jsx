import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onLinkClick: PropTypes.func.isRequired,
};

const CustomLink = ({ href, text, onLinkClick }) => (
    <a href={href} onClick={onLinkClick} target="_blank">{text}</a>
);

CustomLink.propTypes = propTypes;

export default CustomLink;
