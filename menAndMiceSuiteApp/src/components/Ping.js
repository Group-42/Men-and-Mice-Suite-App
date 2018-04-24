import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection} from "./common";

class Ping extends Component {
    render() {
        const {settingsStyle, buttonStyle} = styles;

        return(
            <View style={ settingsStyle }>
                <Header headerText={'Troubleshoot DNS'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>SettingsPing, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    settingsStyle: {
        backgroundColor: '#29495B'
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
};

export default Ping;