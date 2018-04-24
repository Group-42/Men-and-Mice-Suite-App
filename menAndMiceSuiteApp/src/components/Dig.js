import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection} from "./common";

class Dig extends Component {
    render() {
        const {settingsStyle} = styles;

        return(
            <View style={ settingsStyle }>
                <Header headerText={'Troubleshoot DNS'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>SettingsDig, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    settingsStyle: {
        backgroundColor: '#29495B'
    }
};

export default Dig;