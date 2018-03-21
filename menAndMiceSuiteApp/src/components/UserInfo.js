/*
    UserInfo.js

    Test screen that can be used to test new things before they are used in the actual app.
    Dummy file that will be deleted
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser, getHealthStatusBar} from "../actions";
import {Button, Card, CardSection, Spinner} from "./common";

class UserInfo extends Component{
    constructor(props) {
        super(props);
        this.props.getHealthStatusBar();
    }
    onButtonPress() {
    }

    renderButton() {
        if(this.props.isFetching) {
            return <Spinner size="large"/>
        }

        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                GET USER INFO
            </Button>
        );
    }

    render() {
        return(
            <Card>
                <CardSection>
                    <Text>
                        Username: {this.props.user.data.result.user.name}
                    </Text>
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    <Button onPress={this.props.logoutUser}>
                        Logout
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = ({auth, healthStatus}) => {
    const {user} = auth;
    const {isFetching, data} = healthStatus;
    return {user, isFetching, data};
};

export default connect(mapStateToProps, {logoutUser, getHealthStatusBar})(UserInfo);