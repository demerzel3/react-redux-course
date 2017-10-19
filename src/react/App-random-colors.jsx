/* eslint-disable react/no-multi-comp, react/prefer-stateless-function, react/no-array-index-key */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import range from 'ramda/src/range';

const randomColour = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - (min + 1))) + min;

const changeColor = (prevColors) => {
    const colorToChange = getRandomInt(1, 24);
    const nextColors = [...prevColors];
    nextColors[colorToChange] = randomColour();

    return nextColors;
};

class Square extends Component {
    render() {
        const { bgColour } = this.props;
        const style = {
            height: '100px',
            width: '100px',
            float: 'left',
            backgroundColor: bgColour,
        };

        return (
            <div style={style} />
        );
    }
}

Square.propTypes = {
    bgColour: PropTypes.string.isRequired,
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: range(1, 24).map(randomColour),
        };

        setInterval(() => this.setState({ color: changeColor(this.state.color) }), 300);
    }

    render() {
        return (
            <div>
                {this.state.color.map((color, key) => <Square key={key} bgColour={color} />)}
            </div>
        );
    }
}

export default App;
