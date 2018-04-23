import React, { Component } from 'react';
import { View, Text } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { Header, Card, CardSection, Button, Input } from "./common";

class Allocate extends Component {
    render() {
        const { allocateStyle, borderStyle, buttonFetchStyle, buttonApplyStyle, dropdownButtonTextStyle,
            textDescriptionStyle, buttonLocationStyle, dropdownButtonStyle, textStyle } = styles;

        return(
            <View style={ allocateStyle }>
                <Header headerText={ 'Allocate IP' }/>
                <Card>
                    <CardSection>
                        <Input
                            label="IP Range:"
                            placeholder="127.0.0.1"

                        />
                    </CardSection>
                    <CardSection>
                        <View style={ buttonLocationStyle }>
                            <Button
                                onPress={() => alert('it happened')}
                                buttonStyle={ buttonFetchStyle }
                                textStyle={ textStyle }
                                >
                                Fetch Next IP
                            </Button>
                        </View>
                    </CardSection>
                </Card>
                <View style={ borderStyle }/>
                <Card>
                    <CardSection>
                        <Text style={ textDescriptionStyle }> Next IP in range: </Text>
                        <Text style={ textStyle }> Placeholder </Text>
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Domain Name:"
                            placeholder="mmsuite.company.com"

                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="TTL:"
                            placeholder="604800s = 1 week"

                        />
                    </CardSection>
                    <CardSection>
                        <Text style={ textDescriptionStyle }> Type: </Text>
                        <ModalDropdown
                            options={['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6']}
                            style={ dropdownButtonStyle }
                            textStyle={ dropdownButtonTextStyle }
                            defaultValue={"Please select"}
                            dropdownStyle={{ backgroundColor: '#29495B', flex: 1 }}
                            dropdownTextStyle={ dropdownButtonTextStyle }
                        />
                    </CardSection>
                    <CardSection>
                        <View style={ buttonLocationStyle }>
                            <Button
                                onPress={() => alert('it happened')}
                                buttonStyle={ buttonApplyStyle }
                                textStyle={ textStyle }
                            >
                                Apply
                            </Button>
                        </View>
                    </CardSection>
                </Card>
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
        borderColor: '#f7b52b'
    },
    buttonLocationStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    borderStyle: {
        paddingBottom: 14,
        borderBottomWidth: 1.5,
        borderColor: '#f5f5f5'
    },
    buttonFetchStyle: {
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b'
    },
    buttonApplyStyle: {
        width: 120,
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b'
    }
};

export default Allocate;