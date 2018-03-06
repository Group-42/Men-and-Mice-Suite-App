/*
    UserInfo.js

    Test screen that can be used to test new things before they are used in the actual app.
    Dummy file that will be deleted
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser} from "../actions";
import {Button, Card, CardSection} from "./common";

class UserInfo extends Component{
    render() {
        return(
            <Card>
                <CardSection>
                    <Text>
                        Username: {this.props.user.data.result.user.name}
                    </Text>
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

const mapStateToProps = ({auth}) => {
    const {user} = auth;
    return {user};
};

export default connect(mapStateToProps, {logoutUser})(UserInfo);