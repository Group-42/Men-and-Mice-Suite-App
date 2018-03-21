/*
    DashHealth.js

    simple text field with a colored box.
    Used to indicate health status on the dashboard
 */
import React from 'react';
import {View, Text, Image} from 'react-native';

const DashHealth = ({children}) => {
    const {viewStyle, textStyle, boxStyle} = styles;

    return(
        <View style={viewStyle}>

            <Image
                style={boxStyle}
                resizeMode='contain'
                source={require('../icons/Dashboard_greencheck.png')}
            />

            <Text style={textStyle}>
                {children}
            </Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        flexDirection: 'row',
        height: 50
    },
    textStyle: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 24,
        color: '#f5f5f5',
        marginTop: 8,
        paddingLeft: 10,
        paddingRight: 10
    },
    boxStyle: {
        width: 30,
        height: 30,
        marginTop: 7,
        borderColor: 'black',
        borderWidth: 1
    }
};

export { DashHealth };