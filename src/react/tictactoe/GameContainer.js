import { connect } from 'react-redux';

import Game from './Game';
import { toggleSort } from './redux';

const mapStateToProps = ({
    currentMove,
    moves,
}) => ({
    currentMove,
    moves,
});

const mapDispatchToProps = {
    onToggleSort: toggleSort,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Game);
