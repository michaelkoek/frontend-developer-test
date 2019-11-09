import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

import AppNavigator from './navigation/AppNavigator';
import candidateReducer from './store/reducers/candidate';

const rootReducer = combineReducers({
    candidate: candidateReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
    // composeWithDevTools()
);

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
};

export default App;
