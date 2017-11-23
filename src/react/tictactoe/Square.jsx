/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isHightlighted: PropTypes.bool,
};

const defaultProps = {
    value: null,
    isHightlighted: false,
};

class Square extends React.Component {
    render() {
        const { value, onClick, isHightlighted } = this.props;

        return (
            <button
                className="square"
                style={isHightlighted ? { backgroundColor: '#b4ff00' } : {}}
                onClick={onClick}
            >
                {value}
            </button>
        );
    }
}

Square.propTypes = propTypes;
Square.defaultProps = defaultProps;

export default Square;
