import React from 'react';
import PropTypes from 'prop-types';

import BoardContainer from './BoardContainer';
import GameHistoryContainer from './GameHistoryContainer';

const propTypes = {
    onToggleSort: PropTypes.func.isRequired,
    currentMove: PropTypes.number.isRequired,
    moves: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const Game = ({
    onToggleSort,
    currentMove,
    moves,
}) => {
    const {
        currentPlayer,
        winner: {
            player: winnerPlayer,
        } = {},
        isDraw,
    } = moves[currentMove];

    let status = `Next player: ${currentPlayer}`;
    if (winnerPlayer) {
        status = `Winner: ${winnerPlayer}`;
    } else if (isDraw) {
        status = 'Draw';
    }

    return (
        <div className="game">
            <BoardContainer />
            <div className="game-info">
                <div className="status">{status}</div>
                <div>
                    <button onClick={onToggleSort}>
                        Toggle sort order
                    </button>
                </div>
                <GameHistoryContainer />
            </div>
        </div>
    );
};

Game.propTypes = propTypes;

export default Game;
