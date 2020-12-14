import React from 'react';
import { useSelector } from 'react-redux';
import TodoList from '../components/TodoList';
import TodoFormInput from '../components/TodoFormInput';
import { RootState, storeActions } from '../store';
import { useAppDispatch } from '../hooks';

const TodoListView: React.FC = () => {
    // get the global list
    const todoListState = useSelector((state: RootState) => state.todoReducer);
    const dispatch = useAppDispatch();
    const { todoAction } = storeActions;

    return (
        <div>
            <h1>This is a test application</h1>
            <TodoFormInput
                onClickAdd={(item) => dispatch(todoAction.newItem(item))}
                onClickCancel={() => console.log('you clicked cancel')}
            />
            <TodoList todoItems={todoListState} />
        </div>
    );
};

export default TodoListView;
