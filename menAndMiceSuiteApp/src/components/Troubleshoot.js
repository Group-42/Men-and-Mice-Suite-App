import React, { Component } from 'react';
import { View, Text, ViewPropTypes } from 'react-native';
import { PropTypes } from 'prop-types';
import { Header, Card, Button } from "./common";
import { Actions } from 'react-native-router-flux';


const propTypes = {
    name: PropTypes.string,
    sceneStyle: ViewPropTypes.style,
    title: PropTypes.string,
};




class Troubleshoot extends Component {
    state = { hideNavBar: false }

    toggleNavBar() {
        //this.setState({ hideNavBar: !this.state.hideNavBar }, () =>
            //Actions.refresh({ hideNavBar: this.state.hideNavBar })

        const {troubleshootStyle} = styles;

        return(
            <View style={ troubleshootStyle }>
                <Header headerText={'Settings'}/>
                <CardSection>
                    <Text style={{color: 'white'}}>Troubleshoot, coming soon to a app near you</Text>
                </CardSection>
            </View>

        );
    }

    render() {

        const {troubleshootStyle} = styles;
        return (
            <View style={ troubleshootStyle }>
                <Header headerText={'Troubleshoot DNS'}/>
                <Card>
                    <Text style={{color: 'white'}}>Troubleshoot, coming soon to a app near you</Text>
                </Card>
            </View>
        );
    }
}

const styles = {
    troubleshootStyle: {
        backgroundColor: '#29495B'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: 'red',
    }
};

export default Troubleshoot;