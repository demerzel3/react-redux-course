import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ title, body, onCompleted }) => (
    <li>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={onCompleted}>Mark as Completed</button>
    </li>
);

Todo.propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onCompleted: PropTypes.func.isRequired,
};

export default Todo;
