/*
    UserInfo.js

    Test screen that can be used to test new things before they are used in the actual app.
    Dummy file that will be deleted
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import {connect} from 'react-redux';
import {logoutUser} from "../actions";
import {Button, Card, CardSection, Spinner} from "./common";

class UserInfo extends Component{
    constructor(props) {
        super(props);
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
                        Username: {this.props.user[1]}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text>
                        Subcategory: {this.props.subcategoryData.description}
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

const mapStateToProps = ({healthStatus, selectedCategory}) => {
    const {data, user} = healthStatus;
    const {subcategoryData} = selectedCategory;
    return {user, data, subcategoryData};
};

export default connect(mapStateToProps, {logoutUser})(UserInfo);