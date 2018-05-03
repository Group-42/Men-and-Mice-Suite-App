/*
    Router.js

    Organises all the screens into categories, so it is easier to change screens in the app
 */
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import Allocate from './components/Allocate';
import Settings from './components/Settings';
import DashboardDetail from './components/DashboardDetail';
import Ping from './components/Ping';
import Dig from './components/Dig';
import {Text} from "react-native";
import DashboardDetailsOk from "./components/DashboardDetailsOk";


const TabIcon = ({ focused , title}) => {
    return (
        <Text style={{color: focused ? '#F7B52B' : '#F5F5F5'}}>{title}</Text>
    )
};

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={ LoginForm } title="Login" initial hideNavBar/>
                </Scene>
                <Scene key="main">
                    <Scene key="allocate" component={ Allocate } title="Allocate IP" hideNavBar/>

                    <Scene key="troubleshoot">
                        <Scene
                            key="tabbar"
                            tabs={ true }
                            activeBackgroundColor={ '#19415F' }
                            inactiveBackgroundColor={ '#29495B' }
                            tabBarPosition="bottom"
                            showLabel={ false }
                            swipeEnabled={ true }
                        >
                            <Scene key='ping' title='Ping' component={ Ping } icon={TabIcon} hideNavBar/>
                            <Scene key='dig' title='Dig' component={ Dig } icon={TabIcon} hideNavBar/>
                        </Scene>
                    </Scene>

                    <Scene key="settings" component={ Settings } title="Settings" hideNavBar/>
                    <Scene key="dashboard" component={ Dashboard } title="Dashboard" initial hideNavBar/>
                    <scene key="dashDetail" component={ DashboardDetail } title="Dashboard Detail" hideNavBar/>
                    <scene key="dashDetailOk" component={ DashboardDetailsOk } title="Dashboard Detail" hideNavBar/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;