import React, { Component } from 'react';
import Todo from './Todo';

const removeTodo = key => prevState => ({
    todos: prevState.todos
        .slice(0, key)
        .concat(prevState.todos.slice(key + 1)),
});

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { title: 'lorem title 1', body: 'Lorem ipsum 1' },
                { title: 'lorem title 2', body: 'Lorem ipsum 2' },
                { title: 'lorem title 3', body: 'Lorem ipsum 3' },
            ],
        };
    }

    render() {
        const { todos } = this.state;

        return (
            <ul>
                {todos.map(({ title, body }, key) => (
                    <Todo
                        key={key}
                        title={title}
                        body={body}
                        onCompleted={() => this.setState(removeTodo(key))}
                    />
                ))}
            </ul>
        );
    }
}


export default TodoList;
