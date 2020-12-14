import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoListView from '../views/TodoListView';
import TestView from '../views/TestView';

const PageRoute: React.FC = () => {
    return (
        <>
            <Switch>
                <Route exact path="/" component={TodoListView} />
                <Route path="/app" component={TestView} />
            </Switch>
        </>
    );
};

export default PageRoute;
