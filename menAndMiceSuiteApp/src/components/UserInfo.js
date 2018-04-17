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
                        Username: {this.props.user[1]}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text>
                        Subcategory: {this.props.subcategoryData.description}
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

const mapStateToProps = ({healthStatus, selectedCategory}) => {
    const {data, user} = healthStatus;
    const {subcategoryData} = selectedCategory;
    return {user, data, subcategoryData};
};

export default connect(mapStateToProps, {logoutUser})(UserInfo);