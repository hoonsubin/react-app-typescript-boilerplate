import React from 'react';
import './App.css';
import TodoListView from './views/TodoListView';

const App: React.FC = () => {
    return (
        <div className="App">
            <TodoListView />
        </div>
    );
};

export default App;
