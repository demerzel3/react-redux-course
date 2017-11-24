import { connect } from 'react-redux';

import GameHistory from './GameHistory';
import { setCurrentMove } from './redux';

const mapStateToProps = ({
    currentMove,
    moves,
    sort,
}) => ({
    currentMove,
    moves,
    sort,
});

const mapDispatchToProps = ({
    onJumpToMove: setCurrentMove,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GameHistory);
