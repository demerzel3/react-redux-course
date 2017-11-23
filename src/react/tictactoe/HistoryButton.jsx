import React from 'react';
import PropTypes from 'prop-types';

const HistoryButton = ({ onClick, label, isBold }) => (
    <button onClick={onClick}>
        {isBold && <strong>{label}</strong>}
        {!isBold && label}
    </button>
);

HistoryButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    isBold: PropTypes.bool,
};

HistoryButton.defaultProps = {
    isBold: false,
};

export default HistoryButton;
