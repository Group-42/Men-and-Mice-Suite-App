import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection} from "./common";

class Troubleshoot extends Component {
    render() {
        const {troubleshootStyle} = styles;

        return(
            <View style={ troubleshootStyle }>
                <Header headerText={'Troubleshoot DNS'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Troubleshoot DNS, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    troubleshootStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};

export default Troubleshoot;