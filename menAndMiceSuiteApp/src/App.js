/*
    App.js

    This file starts the app
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { MenuProvider } from 'react-native-popup-menu';

class App extends Component {
    render() {
        const store = createStore( reducers, {}, applyMiddleware( ReduxThunk ));
        return (
            <Provider store={store}>
                <MenuProvider>
                    <Router/>
                </MenuProvider>
            </Provider>
        );
    }
}

export default App