import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Header, Card, CardSection, Button } from "./common";

class Allocate extends Component {
    render() {
        const { allocateStyle } = styles;

        return(
            <View style={ allocateStyle }>
                <Header headerText={'Allocate IP'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Allocate IP, coming soon to a app near you</Text>
                </CardSection>
                <CardSection>
                    <Button
                        onPress={() => alert('it happened')}
                        buttonStyle={styles.buttonStyle}
                        textStyle={styles.textStyle}
                    >
                        This button also
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
        padding: 10
    },
    buttonStyle: {
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50
    }
};

export default Allocate;