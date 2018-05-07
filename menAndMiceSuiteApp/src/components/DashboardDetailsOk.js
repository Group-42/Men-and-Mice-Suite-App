/*
    DashboardDetailsOK.js

    Simple view with some text to let the user know that every thing is OK with the chosen subcategory
 */
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Header, BackButton, Card } from "./common";
import { DashHealth } from './DashHealth';
import { backButtonPushed } from "../actions";

class DashboardDetailsOk extends Component {
    constructor() {
        super();
    }

    // returns to the previous screen
    onButtonPress() {
        this.props.backButtonPushed();
    }

    renderButton() {
        return(
            <BackButton onPress={ this.onButtonPress.bind(this) }/>
        );
    }

    // renders the whole screen
    render(){
        const { dashboardStyle, detailHeaderStyle, textStyleHeader, textStyle } = styles;
        const { description, status } = this.props.subcategoryData;

        return(
            <View style={ dashboardStyle }>
                <Header headerText={'Details'}/>
                <View style={ detailHeaderStyle }>
                    { this.renderButton() }

                    <DashHealth healthStatus={ status }>
                        { description }
                    </DashHealth>
                </View>
                <Card>
                    <CardSection>
                        <Text style={ textStyleHeader }> Status: </Text>
                        <Text style={ textStyle }> { status }</Text>
                    </CardSection>
                    <CardSection>
                        <Text style={ textStyleHeader }> Description: </Text>
                        <Text style={ textStyle }> Everything is up and running </Text>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    textStyleHeader: {
        fontFamily: 'ProximaNova-Bold',
        color: '#f5f5f5'
    },
    textStyle: {
        fontFamily: 'ProximaNova-Light',
        color: '#f5f5f5',
        paddingRight: 80
    },
    detailHeaderStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#f5f5f5'
    },
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};

const mapStateToProps = ({ selectedCategory }) => {
    const{ subcategoryData, afterPressAction } = selectedCategory;
    return { subcategoryData, afterPressAction };
};

export default connect( mapStateToProps, { backButtonPushed })( DashboardDetailsOk );