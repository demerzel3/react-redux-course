/* eslint-disable react/no-multi-comp, react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const pokemonShape = PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
});

class Pokecard extends Component {
    render() {
        const { name, type, image } = this.props;
        return (
            <li>
                Name: {name}, type: {type}<br />
                <img src={image} alt={name} />
            </li>
        );
    }
}

Pokecard.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

class Pokedex extends Component {
    render() {
        const pokecardList = this.props.pokemon.map(pokemon =>
            (<Pokecard
                name={pokemon.name}
                type={pokemon.type}
                image={pokemon.image}
                key={pokemon.id}
            />)
        );

        return (
            <ul>
                {pokecardList}
            </ul>
        );
    }
}

Pokedex.propTypes = {
    pokemon: PropTypes.PropTypes.arrayOf(pokemonShape).isRequired,
};

export default class App extends Component {
    render() {
        return (
            <Pokedex pokemon={this.props.pokemon} />
        );
    }
}

App.propTypes = {
    pokemon: PropTypes.PropTypes.arrayOf(pokemonShape),
};

// Specifies the default values for props:
App.defaultProps = {
    pokemon: [
        {
            id: 1,
            name: 'Charmander',
            type: 'fire',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        },
        {
            id: 2,
            name: 'Squirtle',
            type: 'water',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        },
        {
            id: 3,
            name: 'Butterfree',
            type: 'flying',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png',
        },
        {
            id: 4,
            name: 'Rattata',
            type: 'normal',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png',
        },
        {
            id: 5,
            name: 'Metapod',
            type: 'bug',
            image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png',
        },
    ],
};
