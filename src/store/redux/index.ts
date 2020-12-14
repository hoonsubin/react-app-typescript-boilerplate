import { combineReducers } from '@reduxjs/toolkit';
import * as TodoModule from './todoDomain';

const rootReducer = combineReducers({
    todoReducer: TodoModule.reducer,
});

export default rootReducer;

export const reduxActions = {
    todoAction: { ...TodoModule.actions },
};
