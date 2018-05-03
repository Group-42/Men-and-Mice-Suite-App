import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {connect} from 'react-redux';
import {Header, CardSection, Input, Button, Spinner} from "./common";
import {pingDomainChanged, performPing} from '../actions/PingActions';

class Ping extends Component {

    onPingDomainChange(text) {
        this.props.pingDomainChanged(text);
    }

    renderButton(){
        const {buttonStyle, buttonLocationStyle, textStyle} = styles;

        if(this.props.pinging) {
            return(
                <Spinner/>
            );
        }
        return(
            <View style={buttonLocationStyle}>
                <Button
                    buttonStyle={buttonStyle}
                    textStyle={textStyle}
                    onPress={() => this.props.performPing(this.props.pingDomain)}
                >
                    Perform Ping
                </Button>
            </View>
        );
    }

    renderResponse() {
        const {textDescriptionStyle, errorTextStyle} = styles;
        if(this.props.pingError) {
            return(
                <Text style={errorTextStyle}>{this.props.pingError}</Text>
            );
        }else if(this.props.pingResult) {
            return (
                <View>
                    <Text style={textDescriptionStyle}>Alive: {this.props.pingResult.alive.toString()}</Text>
                    <Text style={textDescriptionStyle}>Ping Time: {this.props.pingResult.pingTime}</Text>
                </View>
            );
        }
    }

    render() {
        const {pingStyle} = styles;

        return(
            <View style={ pingStyle }>
                <Header headerText={'Troubleshoot DNS'}/>
                <CardSection>
                    <Input
                        label="IP Address"
                        placeholder="127.0.0.1"
                        keyboardType="numeric"
                        onChangeText={this.onPingDomainChange.bind(this)}
                        value={this.props.pingDomain}
                    />
                </CardSection>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
                <CardSection>
                    {this.renderResponse()}
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
    },
    errorTextStyle: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 20,
        alignSelf: 'center',
        color: '#dc143c',
    }
};

const mapStateToProps = ({ping}) => {
    const {pingDomain, pingResult, pingError, pinging} = ping;
    return {pingDomain, pingResult, pingError, pinging};
};

export default connect(mapStateToProps, {pingDomainChanged, performPing})(Ping);