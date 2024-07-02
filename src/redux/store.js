import { applyMiddleware, createStore } from 'redux';
import { reducer } from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

// Create the Redux store
const Store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(
        /* add any middleware here if needed */
    ))
);

export default Store;
