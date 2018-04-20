import React, {Component} from 'react'
import {View, Text, Image} from 'react-native'
import {Header, Card, Button, CardSection} from "./common";

class Allocate extends Component {
    render() {
        const {allocateStyle} = styles;

        return(
            <View style={ allocateStyle }>
                <Header headerText={'Allocate IP'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Allocate IP, coming soon to a app near you</Text>
                    <Button
                        onPress={() => alert('SHOMETHING')}
                        buttonStyle={styles.buttonStyle}
                    >
                        PRESS ME, AND SEE WHAT HAPPENS
                    </Button>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    allocateStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f7b52b',
        fontFamily: 'ProximaNova-Bold',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f7b52b',
        margin: 5,
        marginRight: 35,
    }
};

export default Allocate;