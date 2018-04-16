/*
    Router.js

    Organises all the screens into categories, so it is easier to change screens in the app
 */
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import Dashboard from './components/Dashboard';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" initial hideNavBar/>
                </Scene>
                <Scene key="main">
                    <Scene key="dashboard" component={Dashboard} title="Dashboard" initial hideNavBar/>
                    <Scene key="testArea" component={UserInfo} title="Test Area" hideNavBar/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;