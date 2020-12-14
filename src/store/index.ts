import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import * as ReduxModule from './redux';

// configure the redux store and middleware so it can be exported
const store = configureStore({
    reducer: ReduxModule.default,
    middleware: [...getDefaultMiddleware()],
});

if (process.env.NODE_ENV === 'development') {
    module.hot?.accept('./redux', () => {
        const newRootReducer = require('./redux').default;
        store.replaceReducer(newRootReducer);
    });
}

export default store;
export * from './model';
export const storeActions = ReduxModule.reduxActions;
