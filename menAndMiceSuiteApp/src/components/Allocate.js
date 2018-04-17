import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection} from "./common";

class Allocate extends Component {
    render() {
        return(
            <View>
                <Header headerText={'Allocate IP'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Allocate IP, coming soon to a app near you</Text>
                </CardSection>
            </View>
        );
    }
}

export default Allocate;