/*
    Router.js

    Organises all the screens into categories, so it is easier to change screens in the app
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Allocate from './components/Allocate';
import Troubleshoot from './components/Troubleshoot';
import Settings from './components/Settings';
import DashboardDetail from './components/DashboardDetail';
import Ping from './components/Ping';
import Dig from './components/Dig';


const TabIcon = ({ selected, title }) => {
    return (
        <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
    );
}

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={ Ping } title="Login" initial hideNavBar/>
                </Scene>
                <Scene key="main">
                    <Scene key="allocate" component={ Allocate } title="Allocate IP" hideNavBar/>

                    <Scene
                        key="tabbar"
                        tabs={true}
                        tabBarStyle={{ backgroundColor: '#F00' }}
                    >
                        <Scene key="Troubleshoot" title='Troubleshoot'

                               icon={TabIcon}
                        >
                            <Scene key='Ping' title='Ping' component={ Ping } hideNavBar/>
                            <Scene key='Dig' title='Dig' component={ Dig } hideNavBar/>
                        </Scene>
                    </Scene>
                    <Scene key="settings" component={ Settings } title="Settings" hideNavBar/>
                    <Scene key="dashboard" component={ Dashboard } title="Dashboard" initial hideNavBar/>
                    <scene key="dashDetail" component={ DashboardDetail } title="Dashboard Detail" hideNavBar/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;