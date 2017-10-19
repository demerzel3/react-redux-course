/* eslint-disable react/no-multi-comp, react/prefer-stateless-function, react/prop-types */
import React, { Component } from 'react';

class FirstComponent extends Component {
    render() {
        return <h1>My very first component.</h1>;
    }
}

class SecondComponent extends Component {
    render() {
        return <h1>My second first component.</h1>;
    }
}

class NamedComponent extends Component {
    render() {
        return <p>My name is {this.props.name}</p>;
    }
}

class Tweet extends React.Component {
    render() {
        return (
            <li className="single-tweet">
                Name: {this.props.name},
                username: {this.props.username},
                date: {this.props.date},
                message: {this.props.message}
            </li>
        );
    }
}
class Person extends Component {
    render() {
        const { age, name: nameRaw, hobbies } = this.props;
        const text = age > 21 ? 'Have a drink!' : 'you must be 21';
        const name = nameRaw.length > 8 ? nameRaw.substring(0, 8) : nameRaw;
        return (
            <div>
                <p>Learn some information about this person</p>
                <h3>{text}</h3>
                <p>{name}</p>
                <ul>
                    {hobbies.map(hobby => (
                        <Hobby name={hobby.name} key={hobby.id} />
                    ))}
                </ul>
            </div>
        );
    }
}
class Hobby extends Component {
    render() {
        return (
            <li>{this.props.name}</li>
        );
    }
}
class App extends Component {
    render() {
        return (
            <div>
                <FirstComponent />
                <SecondComponent />
                <NamedComponent name="Travis" />
                <ul>
                    <Tweet name="Clanto" username="Bella" date="Natale" message="Buon nasale" />
                </ul>
                <Person
                    age={12}
                    name="Antonioiuytr"
                    hobbies={[
                        { name: 'Calcio', id: 1 },
                        { name: 'scacchi', id: 2 },
                        { name: 'pallavolo', id: 3 },
                    ]}
                />
                <Person age={55} name="Antonioiuytr" hobbies={[{ name: 'pallavolo', id: 3 }]} />
                <Person age={12} name="Ryu" hobbies={[{ name: 'Calcio', id: 1 }]} />
                <Person
                    age={55}
                    name="Ken"
                    hobbies={[
                        { name: 'Calcio', id: 1 },
                        { name: 'scacchi', id: 2 },
                        { name: 'pallavolo', id: 3 },
                    ]}
                />
            </div>
        );
    }
}

export default App;
