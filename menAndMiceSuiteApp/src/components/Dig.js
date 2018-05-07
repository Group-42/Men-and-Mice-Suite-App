/*
    Dig.js

    A form used to gather information to perform a dig query.
    Simple input field, dropdown box and button
 */
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Header, CardSection, Input, Button } from "./common";

class Dig extends Component {
    render() {
        const { digStyle, dropdownButtonStyle, dropdownButtonTextStyle, textDescriptionStyle,
            buttonLocationStyle, buttonStyle, textStyle } = styles;

        return(
            <View style={ digStyle }>
                <Header headerText={ 'Troubleshoot DNS' }/>
                <CardSection>
                    <Input
                        label="Domain Name:"
                        placeholder="example.com"
                        keyboardType="numeric"
                    />
                </CardSection>
                <CardSection>
                    <Text style={ textDescriptionStyle }> Record type: </Text>
                    <ModalDropdown
                        options={['A', 'PTR', 'MX', 'NS', 'SOA', 'HINFO', 'TXT', 'ANY']}
                        style={ dropdownButtonStyle }
                        textStyle={ dropdownButtonTextStyle }
                        defaultValue={ "Please select" }
                        dropdownStyle={{ backgroundColor: '#29495B', flex: 1 }}
                        dropdownTextStyle={ dropdownButtonTextStyle }
                    />
                </CardSection>
                <CardSection>
                    <View style={ buttonLocationStyle }>
                        <Button
                            onPress={() => { alert("TODO make button do something") }}
                            buttonStyle={ buttonStyle }
                            textStyle={ textStyle }
                        >
                            Perform Query
                        </Button>
                    </View>
                </CardSection>
            </View>
        );
    }
}

const styles = {
    digStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    textDescriptionStyle: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
        alignSelf: 'center',
        color: '#f5f5f5',
        paddingLeft: 12,
        paddingRight: 2,
    },
    dropdownButtonStyle: {
        backgroundColor: '#29495B',
        borderRadius: 1,
        borderWidth: 1,
        borderColor: '#f7d10f'
    },
    dropdownButtonTextStyle: {
        alignSelf: 'center',
        backgroundColor: '#29495B',
        color: '#f5f5f5',
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 16,
        padding: 10,
        borderWidth: 1,
        borderColor: '#f7b52b',
        minWidth: 100
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
        borderColor: '#f7b52b'
    },
    buttonLocationStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
};

export default Dig;