/*
    Allocate.js

    Screen used to get the info needed to create a new DNS record for the given IP address
    Simple initial display with one input field and one button. If the given IP range is valid, then an dropdown box
    appears with the different types of DNS record. The rest of the UI is dictated by the chosen DNS record type
 */
import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import ModalDropdown from 'react-native-modal-dropdown';
import { Header, Card, CardSection, Button, Input, Spinner } from "./common";
import {
    ipRangeChanged,
    domainNameChanged,
    ttlChanged,
    recordTypeChanged,
    nextFreeAddress,
    createDNSRecord
} from '../actions';

class Allocate extends Component {
    constructor(props){
        super(props);
        this.state = {
            dnsRecordType: ''
        }
    }

    // on text change dispatch action
    onIpRangeChanged(text) {
        this.props.ipRangeChanged(text);
    }

    onDomainNameChanged(text) {
        this.props.domainNameChanged(text);
    }

    onTTLChanged(text) {
        this.props.ttlChanged(text);
    }

    // converts array number to corresponding DNS record type
    onRecordTypeChanged(text) {
        let type = '';

        this.setState({
            dnsRecordType: text
        });

        switch(text){
            case '0':
                type = 'A';
                break;
            case '1':
                type = 'NS';
                break;
            case '2':
                type = 'CNAME';
                break;
            case '3':
                type = 'SOA';
                break;
            case '4':
                type = 'PTR';
                break;
            case '5':
                type = 'MX';
                break;
            default:
                type = text;
        }
        this.props.recordTypeChanged(type);
    }

    // display spinner instead of button if app is fetching data
    renderFetchButton() {
        if(this.props.fetching)
        {
            return <Spinner/>
        }
        return (
            <Button
                onPress={ this.onFetchButtonPress.bind(this) }
                buttonStyle={ styles.buttonFetchStyle }
                textStyle={ styles.textStyle }
            >
                Fetch Next IP
            </Button>
        )
    }

    // fetches the next free IP address in the given range
    onFetchButtonPress() {
        const { ipRange } = this.props;

        Keyboard.dismiss();
        this.props.nextFreeAddress(ipRange);
    }

    renderApplyButton() {
        if(this.props.isPosting) {
            return <Spinner/>
        }

        return(
            <Button
                onPress={ this.onApplyButtonPress.bind(this) }
                buttonStyle={ styles.buttonApplyStyle }
                textStyle={ styles.textStyle }
            >
                Apply
            </Button>
        );
    }

    // creates a new DNS record for the given domain with the given information
    onApplyButtonPress() {
        const { domain, ttl, recordType, nextIP } = this.props;

        this.props.createDNSRecord({ domain, ttl, recordType, nextIP });
    }

    // only renders the IP address if there is one
    renderNextIpAddress() {
        if(this.props.nextIP === '') {
            return (
                <Text style={ styles.textStyle }> Placeholder </Text>
            )
        }

        return (
            <Text style={styles.textStyle}> { this.props.nextIP } </Text>
        )
    }

    // renders an fetching error
    renderFetchError() {
        if(this.props.fetchError) {
            return (
                <View>
                    <Text style={ styles.errorTextStyle }>
                        { this.props.fetchError }
                    </Text>
                </View>
            )
        }
    }

    // renders an posting error
    renderPostError() {
        if(this.props.postError) {
            return (
                <View>
                    <Text style={ styles.errorTextStyle }>
                        { this.props.postError }
                    </Text>
                </View>
            )
        }
    }

    // renders the correct input form based on the selected DNS record type
    renderDnsFormFromType(type){
        const { textDescriptionStyle, buttonLocationStyle } = styles;
        switch(type){
            case '0':
                return(
                    <View>
                        <CardSection>
                            <Input
                                label="Host Name:"
                                placeholder="mmsuite.company.com"
                                onChangeText={ this.onDomainNameChanged.bind(this) }
                                value={ this.props.domain }
                            />
                        </CardSection>
                        <CardSection>
                            <Input
                                label="TTL:"
                                placeholder="604800s = 1 week"
                                onChangeText={ this.onTTLChanged.bind(this) }
                                value={ this.props.ttl }
                                keyboardType="numeric"
                            />
                        </CardSection>
                        <CardSection>
                            <View style={ buttonLocationStyle }>
                                { this.renderApplyButton(this.state.dnsRecordType) }
                            </View>
                        </CardSection>
                    </View>
                );
            case '1':
                return(
                    <Text style={ textDescriptionStyle }>NS Records Coming Soon</Text>
                );
            case '2':
                return(
                    <Text style={ textDescriptionStyle }>CNAME Records Coming Soon</Text>
                );
            case '3':
                return(
                    <Text style={ textDescriptionStyle }>SOA Records Coming Soon</Text>
                );
            case '4':
                return(
                    <Text style={ textDescriptionStyle }>PTR Records Coming Soon</Text>
                );
            case '5':
                return(
                    <Text style={ textDescriptionStyle }>MX Records Coming Soon</Text>
                );
            default:
        }
    }

    // renders the basic DNS form when the next free IP address is found
    renderDnsRecordForm() {
        const { dropdownButtonTextStyle, textDescriptionStyle,dropdownButtonStyle } = styles;
        if(this.props.nextIP) {
            return (
                <Card>
                    <CardSection>
                        <Text style={ textDescriptionStyle }> Next IP in range: </Text>
                        {this.renderNextIpAddress()}
                    </CardSection>
                    <CardSection>
                        <Text style={ textDescriptionStyle }> Record type: </Text>
                        <ModalDropdown
                            options={['A', 'NS', 'CNAME', 'SOA', 'PTR', 'MX']}
                            style={ dropdownButtonStyle }
                            textStyle={ dropdownButtonTextStyle }
                            defaultValue={ "Please select" }
                            dropdownStyle={{ backgroundColor: '#29495B', flex: 1 }}
                            dropdownTextStyle={ dropdownButtonTextStyle }
                            onSelect={ this.onRecordTypeChanged.bind(this) }
                        />
                    </CardSection>
                    { this.renderDnsFormFromType(this.state.dnsRecordType) }
                    { this.renderPostError() }
                </Card>
            )
        }
    }

    // renders the whole screen
    render() {
        const { allocateStyle, borderStyle, buttonLocationStyle } = styles;

        return(
            <View style={ allocateStyle }>
                <Header headerText={ 'Allocate IP' }/>
                <Card>
                    <CardSection>
                        <Input
                            label="IP Range:"
                            placeholder="127.0.0.1"
                            onChangeText={ this.onIpRangeChanged.bind(this) }
                            value={ this.props.ipRange }
                        />
                    </CardSection>
                    <CardSection>
                        { this.renderFetchError() }
                        <View style={ buttonLocationStyle }>
                            { this.renderFetchButton() }
                        </View>
                    </CardSection>
                </Card>
                <View style={ borderStyle } />
                { this.renderDnsRecordForm() }
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
        borderColor: '#f7b52b',
        minWidth: 100
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
    },
    errorTextStyle: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 20,
        alignSelf: 'center',
        color: '#dc143c',
    }
};

const mapStateToProps = ({ allocateIP }) => {
    const { ipRange, domain, ttl, recordType, fetching, isPosting, nextIP, fetchError, postError } = allocateIP;
    return { ipRange, domain, ttl, recordType, fetching, isPosting, nextIP, fetchError, postError };
};

export default connect( mapStateToProps, {
    ipRangeChanged,
    domainNameChanged,
    ttlChanged,
    recordTypeChanged,
    nextFreeAddress,
    createDNSRecord
})( Allocate );