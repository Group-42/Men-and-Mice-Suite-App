import React from 'react';
import {Scene, Router} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import UserInfo from './components/UserInfo';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Login" initial/>
                </Scene>
                <Scene key="main">
                    <Scene key="user" component={UserInfo} title="User Info"/>
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;