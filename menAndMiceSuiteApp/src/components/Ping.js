import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Header, CardSection, Input, Button} from "./common";

class Ping extends Component {
    render() {
        const {pingStyle, buttonStyle, buttonLocationStyle, textStyle} = styles;

        return(
            <View style={ pingStyle }>
                <Header headerText={'Troubleshoot DNS'}/>
                <CardSection>
                    <Input
                        label="Domain Name"
                        placeholder="example.com"
                    />
                </CardSection>
                <CardSection>
                    <View style={buttonLocationStyle}>
                        <Button
                            onPress={() => {alert("TODO make button do something")}}
                            buttonStyle={buttonStyle}
                            textStyle={textStyle}
                        >
                            Perform Ping
                        </Button>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    pingStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    buttonStyle: {
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b'
    },
    buttonLocationStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    textStyle: {
        alignSelf: 'center',
        color: '#f7b52b',
        fontFamily: 'ProximaNova-Bold',
        fontSize: 16,
        padding: 10
    },
    textDescriptionStyle: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
        alignSelf: 'center',
        color: '#f5f5f5',
        paddingLeft: 12,
        paddingRight: 2,
    }
};

export default Ping;