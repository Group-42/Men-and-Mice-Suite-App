import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, Card} from "./common";

class Allocate extends Component {
    render() {
        const {allocateStyle} = styles;

        return(
            <View style={ allocateStyle }>
                <Header headerText={'Allocate IP'}/>
                <Card>
                    <Text style={{color: 'white'}}>Allocate IP, coming soon to a app near you</Text>
                </Card>
            </View>
        );
    }
}

const styles = {
    allocateStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};

export default Allocate;