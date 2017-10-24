import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    onTitleChange: PropTypes.func.isRequired,
    onBodyChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

const NewTodoForm = ({
    title,
    body,
    onTitleChange,
    onBodyChange,
    onSubmit,
}) => (
    <div>
        <label htmlFor="title">
            Title:
        </label>
        <input
            id="title"
            onChange={ev => onTitleChange(ev.target.value)}
            value={title}
        />
        <label htmlFor="body">
            Body:
        </label>
        <input
            id="body"
            onChange={ev => onBodyChange(ev.target.value)}
            value={body}
        />
        <button onClick={onSubmit}>Add!</button>
    </div>
);

NewTodoForm.propTypes = propTypes;

export default NewTodoForm;
