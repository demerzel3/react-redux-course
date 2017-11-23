/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import './tictactoe/style.css';
import Board from './tictactoe/Board';
import HistoryButton from './tictactoe/HistoryButton';

const initialState = {
    moves: [{
        squares: [
            null, null, null,
            null, null, null,
            null, null, null,
        ],
        currentPlayer: 'O',
        winner: undefined,
        isDraw: false,
        squareIndex: null,
    }],
    currentMove: 0,
    sort: 'ASC',
};

const indexToCoords = index => ({
    x: index % 3,
    y: Math.floor(index / 3),
});

const printCoords = ({ x, y }) => `(${x + 1}, ${y + 1})`;

const calculateIsDraw = squares => squares.every(square => square !== null);

const getValueIfSame = values => values.reduce((result, value) => (
    value && result === value ? value : null
), values[0]);

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const winningLine = lines.find(line =>
        getValueIfSame(line.map(index => squares[index]))
    );

    return winningLine
        ? { player: squares[winningLine[0]], squares: winningLine }
        : undefined;
};

const buildNextMove = (prevMove, index) => {
    const { squares: prevSquares, currentPlayer } = prevMove;
    const nextSquares = [...prevSquares];
    nextSquares[index] = currentPlayer;

    return {
        squares: nextSquares,
        currentPlayer: currentPlayer === 'X' ? 'O' : 'X',
        winner: calculateWinner(nextSquares),
        isDraw: calculateIsDraw(nextSquares),
        squareIndex: index,
    };
};

const move = index => ({
    moves,
    currentMove,
}) => {
    const nextCurrentMove = currentMove + 1;
    const nextMoves = [
        ...moves.slice(0, nextCurrentMove),
        buildNextMove(moves[currentMove], index),
    ];

    return {
        moves: nextMoves,
        currentMove: nextCurrentMove,
    };
};

class Game extends React.Component {
    constructor(props) {
        super(props);

        this.state = initialState;
        this.handleSquareClick = this.handleSquareClick.bind(this);
        this.handleJumpToMove = this.handleJumpToMove.bind(this);
        this.handleToggleSort = this.handleToggleSort.bind(this);
    }

    handleSquareClick(index) {
        const { currentMove, moves } = this.state;
        const { squares, winner } = moves[currentMove];

        if (!winner && squares[index] === null) {
            this.setState(move(index, currentMove), () => console.log(this.state));
        }
    }

    handleJumpToMove(moveIndex) {
        this.setState({
            currentMove: moveIndex,
        });
    }

    handleToggleSort() {
        this.setState(({ sort: prevSort }) => ({
            sort: prevSort === 'ASC' ? 'DESC' : 'ASC',
        }));
    }

    render() {
        const { currentMove, moves, sort } = this.state;
        const {
            squares,
            currentPlayer,
            winner: {
                player: winnerPlayer,
                squares: winningSquares = [],
            } = {},
            isDraw,
        } = moves[currentMove];

        let status = `Next player: ${currentPlayer}`;
        if (winnerPlayer) {
            status = `Winner: ${winnerPlayer}`;
        } else if (isDraw) {
            status = 'Draw';
        }

        const movesButtons = moves.map((thisMove, index) => (
            <li key={index}>
                {index === 0
                    ? <HistoryButton
                        onClick={() => this.handleJumpToMove(0)}
                        label="Go to beginning of game"
                        isBold={index === currentMove}
                    />
                    : <HistoryButton
                        onClick={() => this.handleJumpToMove(index)}
                        label={`Go to move #${index} ${printCoords(indexToCoords(thisMove.squareIndex))}`}
                        isBold={index === currentMove}
                    />}
            </li>
        ));

        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={squares}
                        winningSquares={winningSquares}
                        onSquareClick={this.handleSquareClick}
                    />
                </div>
                <div className="game-info">
                    <div className="status">{status}</div>
                    <div>
                        <button onClick={this.handleToggleSort}>
                            Toggle sort order
                        </button>
                    </div>
                    <ol>{sort === 'DESC' ? movesButtons.reverse() : movesButtons}</ol>
                </div>
            </div>
        );
    }
}

export default Game;
