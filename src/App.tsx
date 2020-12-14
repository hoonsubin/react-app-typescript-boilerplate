import React from 'react';
import PageRoute from './routes';
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';

interface Props {
    history: History;
}
const App: React.FC<Props> = ({ history }) => {
    return (
        <ConnectedRouter history={history}>
            <PageRoute />
        </ConnectedRouter>
    );
};

export default App;
