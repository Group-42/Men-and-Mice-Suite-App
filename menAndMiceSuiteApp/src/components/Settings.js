import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection} from "./common";

class Settings extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Settings'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Settings, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

export default Settings;