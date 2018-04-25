import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {connect} from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import {Header, Card, CardSection, Button, Input, Spinner} from "./common";
import {ipRangeChanged, nextFreeAddress} from '../actions';

class Allocate extends Component {
    onIpRangeChanged(text) {
        this.props.ipRangeChanged(text);
    }

    renderFetchButton() {
        if(this.props.fetching)
        {
            return <Spinner/>
        }
        return (
            <Button
                onPress={this.onFetchButtonPress.bind(this)}
                buttonStyle={styles.buttonFetchStyle}
                textStyle={styles.textStyle}
            >
                Fetch Next IP
            </Button>
        )
    }

    renderNextIpAddress() {
        if(this.props.nextIP === '') {
            return (
                <Text style={styles.textStyle}> Placeholder </Text>
            )
        }
        return (
            <Text style={styles.textStyle}> { this.props.nextIP } </Text>
        )
    }

    onFetchButtonPress() {
        const {ipRange} = this.props;

        this.props.nextFreeAddress(ipRange);
    }

    render() {
        const { allocateStyle, borderStyle, buttonApplyStyle, dropdownButtonTextStyle,
            textDescriptionStyle, buttonLocationStyle, dropdownButtonStyle, textStyle } = styles;

        return(
            <View style={ allocateStyle }>
                <Header headerText={ 'Allocate IP' }/>
                <Card>
                    <CardSection>
                        <Input
                            label="IP Range:"
                            placeholder="127.0.0.1"
                            onChangeText={this.onIpRangeChanged.bind(this)}
                            value={this.props.ipRange}
                        />
                    </CardSection>
                    <CardSection>
                        <View style={ buttonLocationStyle }>
                            {this.renderFetchButton()}
                        </View>
                    </CardSection>
                </Card>
                <View style={ borderStyle }/>
                <Card>
                    <CardSection>
                        <Text style={ textDescriptionStyle }> Next IP in range: </Text>
                        {this.renderNextIpAddress()}
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

const mapStateToProps = ({allocateIP}) => {
    const {ipRange, fetching, nextIP} = allocateIP;
    return {ipRange, fetching, nextIP};
};

export default connect(mapStateToProps, {ipRangeChanged, nextFreeAddress})(Allocate);