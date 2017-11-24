/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Provider } from 'react-redux';

import GameContainer from './tictactoe/GameContainer';
import configureStore from './tictactoe/configureStore';
import './tictactoe/style.css';

const store = configureStore();

const App = () => (
    <Provider store={store}>
        <GameContainer />
    </Provider>
);

export default App;
