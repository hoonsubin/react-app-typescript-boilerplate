import React, { useState } from 'react';
import { Todo } from '../store';

interface Props {
    onClickAdd: (item: Todo) => void;
    onClickCancel: () => void;
}

const TodoFormInput: React.FC<Props> = ({ onClickAdd, onClickCancel }) => {
    const emptyFormVal = { id: 0, title: '', body: '' };
    const [todoItem, setTodoItem] = useState<Todo>(emptyFormVal);

    const handleAddButton = () => {
        onClickAdd(todoItem);
        // reset the form value
        setTodoItem(emptyFormVal);
    };

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
            <button onClick={() => handleAddButton()}>Add todo</button>
            <button onClick={onClickCancel}>Cancel input</button>
        </div>
    );
};

export default TodoFormInput;
