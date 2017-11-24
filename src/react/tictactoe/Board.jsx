/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from './Square';

const propTypes = {
    squares: PropTypes.arrayOf(PropTypes.oneOf([null, 'O', 'X'])).isRequired,
    winningSquares: PropTypes.arrayOf(PropTypes.number).isRequired,
    onSquareClick: PropTypes.func.isRequired,
};

class Board extends Component {
    renderSquare(index) {
        const { squares, winningSquares = [], onSquareClick } = this.props;

        return (
            <Square
                key={index}
                value={squares[index]}
                onClick={() => onSquareClick(index)}
                isHightlighted={winningSquares.includes(index)}
            />
        );
    }

    render() {
        const rows = Array(3).fill(null).map((_, i) => (
            Array(3).fill(null).map((__, j) => (
                (i * 3) + j
            ))
        ));

        return (
            <div className="game-board">
                {rows.map((rowItems, rowIndex) => (
                    <div className="board-row" key={rowIndex}>
                        {rowItems.map(squareIndex => (
                            this.renderSquare(squareIndex)
                        ))}
                    </div>
                ))}
            </div>
        );
    }
}

Board.propTypes = propTypes;

export default Board;
