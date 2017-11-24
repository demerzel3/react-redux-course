import { connect } from 'react-redux';

import { move } from './redux';
import Board from './Board';

const mapStateToProps = ({ currentMove, moves }) => {
    const {
        squares,
        winner: {
            squares: winningSquares = [],
        } = {},
    } = moves[currentMove];

    return {
        squares,
        winningSquares,
    };
};

const mapDispatchToProps = {
    onSquareClick: move,
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const { squares, winningSquares } = stateProps;
    const { onSquareClick, ...otherDispatchProps } = dispatchProps;

    return {
        ...stateProps,
        ...otherDispatchProps,
        // Inhibit square click when can't move.
        onSquareClick: index =>
            winningSquares.length === 0
                && squares[index] === null
                && onSquareClick(index),
        ...ownProps,
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps,
)(Board);
