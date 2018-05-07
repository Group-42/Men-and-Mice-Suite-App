/*
    Settings.js

    A collection of changeable variables
 */
import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, CardSection } from "./common";

class Settings extends Component {
    render() {
        const { settingsStyle } = styles;

        return(
            <View style={ settingsStyle }>
                <Header headerText={ 'Settings' }/>
                <CardSection>
                    <Text style={{ color: 'white' }}>Settings, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    settingsStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};

export default Settings;