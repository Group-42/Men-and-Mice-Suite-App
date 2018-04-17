/*
    Router.js

    Organises all the screens into categories, so it is easier to change screens in the app
 */
import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';
import Dashboard from './components/Dashboard';
import Allocate from './components/Allocate';
import Troubleshoot from './components/Troubleshoot';
import Settings from './components/Settings';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" initial hideNavBar/>
                </Scene>
                <Scene key="main">
                    <Scene key="dashboard" component={Dashboard} title="Dashboard" initial hideNavBar/>
                    <Scene key="allocate" component={Allocate} title="Allocate IP" hideNavBar/>
                    <Scene key="troubleshoot" component={Troubleshoot} title="Troubleshoot DNS" hideNavBar/>
                    <Scene key="settings" component={Settings} title="Settings" hideNavBar/>
                    <Scene key="testArea" component={UserInfo} title="Test Area" hideNavBar/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;