// Constants
const MOVE = 'MOVE';
const SET_CURRENT_MOVE = 'SET_CURRENT_MOVE';
const TOGGLE_SORT = 'TOGGLE_SORT';

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

// Actions
export const move = index => ({
    type: MOVE,
    payload: {
        index,
    },
});

export const setCurrentMove = index => ({
    type: SET_CURRENT_MOVE,
    payload: {
        index,
    },
});

export const toggleSort = () => ({
    type: TOGGLE_SORT,
});

// Reducer
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

const executeMove = (index, {
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

export default (state = initialState, action) => {
    const { type, payload } = action;
    let nextState;

    switch (type) {
        case MOVE: {
            const { index } = payload;

            nextState = {
                ...state,
                ...executeMove(index, state),
            };

            break;
        }
        case SET_CURRENT_MOVE: {
            const { index } = payload;

            nextState = {
                ...state,
                currentMove: index,
            };

            break;
        }
        case TOGGLE_SORT: {
            nextState = {
                ...state,
                sort: state.sort === 'ASC' ? 'DESC' : 'ASC',
            };

            break;
        }
        default:
            nextState = state;
            break;
    }

    return nextState;
};
