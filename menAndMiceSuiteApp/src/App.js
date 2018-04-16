import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { MenuProvider } from 'react-native-popup-menu';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <MenuProvider>
                <Provider store={store}>
                    <Router/>
                </Provider>
            </MenuProvider>
        );
    }
}

export default App