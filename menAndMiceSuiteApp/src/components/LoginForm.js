/*
    LoginForm.js

    The initial screen that the user sees.
    simple input fields and login button
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Image, Text} from 'react-native';
import {serverNameChanged, usernameChanged, passwordChanged, loginUser} from '../actions';
import {Card, CardSection, Input, Button, Spinner} from "./common";

class LoginForm extends Component {
    onServerNameChange(text) {
        this.props.serverNameChanged(text);
    }

    onUsernameChange(text) {
        this.props.usernameChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        const {serverName, username, password} = this.props;

        this.props.loginUser({serverName, username, password});
    }

    renderError() {
        if(this.props.error) {
            return (
                <View Style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            )
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large"/>
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Image
                            style={styles.imageStyle}
                            resizeMode='contain'
                            source={require('../icons/logo.jpg')}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Server Name"
                            placeholder="mmsuite.company.com"
                            onChangeText={this.onServerNameChange.bind(this)}
                            value={this.props.serverName}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Username"
                            placeholder="username"
                            onChangeText={this.onUsernameChange.bind(this)}
                            value={this.props.username}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>

                    {this.renderError()}

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    imageStyle: {
        flexShrink: 1,
        height: 90
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({auth}) => {
    const {serverName, username, password, loading, error} = auth;
    return {serverName, username, password, loading, error};
};

export default connect(mapStateToProps, {
    serverNameChanged,
    usernameChanged,
    passwordChanged,
    loginUser
})(LoginForm);