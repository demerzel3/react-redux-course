import React from 'react';
import PropTypes from 'prop-types';

import HistoryButton from './HistoryButton';

const indexToCoords = index => ({
    x: index % 3,
    y: Math.floor(index / 3),
});

const printCoords = ({ x, y }) => `(${x + 1}, ${y + 1})`;

const propTypes = {
    onJumpToMove: PropTypes.func.isRequired,
    currentMove: PropTypes.number.isRequired,
    moves: PropTypes.arrayOf(PropTypes.object).isRequired,
    sort: PropTypes.oneOf(['ASC', 'DESC']).isRequired,
};

const GameHistory = ({
    onJumpToMove,
    currentMove,
    moves,
    sort,
}) => {
    const movesButtons = moves.map((thisMove, index) => (
        <li key={index}>
            {index === 0
                ? <HistoryButton
                    onClick={() => onJumpToMove(0)}
                    label="Go to beginning of game"
                    isBold={index === currentMove}
                />
                : <HistoryButton
                    onClick={() => onJumpToMove(index)}
                    label={`Go to move #${index} ${printCoords(indexToCoords(thisMove.squareIndex))}`}
                    isBold={index === currentMove}
                />}
        </li>
    ));

    return (
        <ol>{sort === 'DESC' ? movesButtons.reverse() : movesButtons}</ol>
    );
};

GameHistory.propTypes = propTypes;

export default GameHistory;
