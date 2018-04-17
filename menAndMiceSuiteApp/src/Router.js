/*
    Router.js

    Organises all the screens into categories, so it is easier to change screens in the app
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import DashboardDetail from './components/DashboardDetail';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={ LoginForm } title="Login" initial hideNavBar/>
                </Scene>
                <Scene key="main">
                    <Scene key="dash" component={ Dashboard } title="Dashboard" initial hideNavBar/>
                    <scene key="dashDetail" component={ DashboardDetail } title="Dashboard Detail" hideNavBar/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;