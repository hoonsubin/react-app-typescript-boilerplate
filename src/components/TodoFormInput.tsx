import React, { useState } from 'react';
import { Todo } from '../store';

interface Props {
    onClickAdd: (item: Todo) => void;
    onClickCancel: () => void;
}

const TodoFormInput: React.FC<Props> = ({ onClickAdd, onClickCancel }) => {
    const [todoItem, setTodoItem] = useState<Todo>({ id: 0, title: '', body: '' });

    return (
        <div>
            <input
                placeholder="type title"
                value={todoItem.title}
                onChange={(e) => setTodoItem({ ...todoItem, title: e.target.value })}
            ></input>
            <input
                placeholder="type content"
                value={todoItem.body}
                onChange={(e) => setTodoItem({ ...todoItem, body: e.target.value })}
            ></input>
            <button onClick={() => onClickAdd(todoItem)}>Add todo</button>
            <button onClick={onClickCancel}>Cancel input</button>
        </div>
    );
};

export default TodoFormInput;
