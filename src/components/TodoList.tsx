import React from 'react';
import { Todo } from '../store';

interface Props {
    todoItems: Todo[];
}

const TodoList: React.FC<Props> = ({ todoItems }) => {
    return (
        <div>
            {todoItems.length > 0 ? (
                <ul>
                    {todoItems.map((item) => {
                        return <li key={item.body + item.id}>{item.title}</li>;
                    })}
                </ul>
            ) : (
                <div>the list is empty</div>
            )}
        </div>
    );
};

export default TodoList;
