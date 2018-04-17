import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection} from "./common";

class Troubleshoot extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Troubleshoot DNS'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Troubleshoot DNS, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

export default Troubleshoot;