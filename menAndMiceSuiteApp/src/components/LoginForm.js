/*
    LoginForm.js

    The initial screen that the user sees.
    simple input fields and login button
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Image, Text, Keyboard } from 'react-native';
import { serverNameChanged, usernameChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from "./common";

class LoginForm extends Component {

    // on text change dispatch action
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
        const { serverName, username, password } = this.props;

        Keyboard.dismiss();
        this.props.loginUser({ serverName, username, password });
    }

    // renders login error if it occurs
    renderError() {

        if(this.props.error) {
            return (
                <View>
                    <Text style={ styles.errorTextStyle }>
                        { this.props.error }
                    </Text>
                </View>
            )
        }
    }

    // renders spinner instead of button if app is login in user
    renderButton() {
        if(this.props.loading) {
            return <Spinner size="large"/>
        }

        return(
            <Button
                onPress={ this.onButtonPress.bind(this) }
                buttonStyle={ styles.buttonStyle }
                textStyle={ styles.textStyle }
            >
                Login
            </Button>
        );
    }

    // renders the whole screen
    render() {
        return (
            <View style={ styles.loginStyle} >
                <Card>
                    <View style={ styles.imageViewStyle }>
                        <Image
                            source={ require('../icons/logo_dark.png') }
                            style={ styles.imageStyle }

                        />
                    </View>
                    <CardSection>
                        <Input
                            label="Server Name"
                            placeholder="mmsuite.company.com"
                            onChangeText={ this.onServerNameChange.bind(this) }
                            value={ this.props.serverName }
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Username"
                            placeholder="username"
                            onChangeText={ this.onUsernameChange.bind(this) }
                            value={ this.props.username }
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeholder="password"
                            onChangeText={ this.onPasswordChange.bind(this) }
                            value={ this.props.password }
                        />
                    </CardSection>

                    <CardSection>
                        { this.renderButton() }
                    </CardSection>

                    { this.renderError() }
                </Card>
            </View>
        );
    }
}

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#f7b52b',
        fontFamily: 'ProximaNova-Bold',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50
    },
    loginStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    imageViewStyle: {
        alignItems: 'center',
    },
    imageStyle: {
        height: 73,
        width: 336,
        marginTop: 55,
        marginBottom: 45
    },
    errorTextStyle: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 20,
        alignSelf: 'center',
        color: '#dc143c',
    }
};

const mapStateToProps = ({ auth }) => {
    const { serverName, username, password, loading, error } = auth;
    return { serverName, username, password, loading, error };
};

export default connect( mapStateToProps, {
    serverNameChanged,
    usernameChanged,
    passwordChanged,
    loginUser
})( LoginForm );