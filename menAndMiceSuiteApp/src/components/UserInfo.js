/*
    UserInfo.js

    Test screen that can be used to test new things before they are used in the actual app.
    Dummy file that will be deleted
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser} from "../actions";
import {Button, Card, CardSection, Header} from "./common";

class UserInfo extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card>
                <Header headerText={'TEST AREA'}/>
                <CardSection>
                    <Text>
                        Username: {this.props.user.data.result.user.name}
                    </Text>
                </CardSection>
                <CardSection>

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

export default connect(mapStateToProps, {logoutUser})(UserInfo);