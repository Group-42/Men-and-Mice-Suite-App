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
                <View Style={{backgroundColor: '#ffffff'}}>
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
            <View style={styles.loginStyle}>
                <Card>
                    <CardSection>
                        <Image
                            style={styles.imageStyle}
                            resizeMode='contain'
                            source={require('../icons/logo_dark.png')}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Domain Name"
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

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>

                    {this.renderError()}
                </Card>
            </View>
        );
    }
}

const styles = {
    loginStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    imageStyle: {
        flexShrink: 1,
        height: 90,
        marginTop: 50,
        marginBottom: 25
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: '#dc143c',
        backgroundColor: '#29495B'
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