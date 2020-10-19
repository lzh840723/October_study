import { createStore } from 'redux';
import reducer from './reducer';
import thunk from 'redux-thunk'

const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()   // use redux devTool
);

export default store;