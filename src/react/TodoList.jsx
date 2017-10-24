import React, { Component } from 'react';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';

const removeTodo = key => prevState => ({
    todos: prevState.todos
        .slice(0, key)
        .concat(prevState.todos.slice(key + 1)),
});

const addTodo = todo => prevState => ({
    newTodo: {
        title: '',
        body: '',
    },
    todos: [todo, ...prevState.todos],
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
            newTodo: {
                title: '',
                body: '',
            },
        };

        this.handleNewTodoTitleChange = this.handleNewTodoChange.bind(this, 'title');
        this.handleNewTodoBodyChange = this.handleNewTodoChange.bind(this, 'body');
        this.handleNewTodoSubmit = this.handleNewTodoSubmit.bind(this);
    }

    handleNewTodoChange(fieldName, nextValue) {
        this.setState(prevState => ({
            newTodo: {
                ...prevState.newTodo,
                [fieldName]: nextValue,
            },
        }));
    }

    handleNewTodoSubmit() {
        const { newTodo } = this.state;

        this.setState(addTodo(newTodo));
    }

    render() {
        const { todos, newTodo: { title: newTitle, body: newBody } } = this.state;

        return (
            <div>
                <NewTodoForm
                    title={newTitle}
                    body={newBody}
                    onTitleChange={this.handleNewTodoTitleChange}
                    onBodyChange={this.handleNewTodoBodyChange}
                    onSubmit={this.handleNewTodoSubmit}
                />
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
            </div>
        );
    }
}


export default TodoList;
