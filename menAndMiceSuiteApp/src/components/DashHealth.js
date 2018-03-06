/*
    DashHealth.js

    simple text field with a colored box.
    Used to indicate health status on the dashboard
 */
import React from 'react';
import {View, Text} from 'react-native';

const DashHealth = ({children}) => {
    const {textStyle, boxStyle} = styles;

    return(
        <View style={{flexDirection: 'row'}}>
            <View style={boxStyle}/>
            <Text style={textStyle}>
                {children}
            </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        paddingLeft: 10,
        paddingRight: 10
    },
    boxStyle: {
        width: 15,
        height: 15,
        backgroundColor:'green',
        borderColor: 'black',
        borderWidth: 1
    }
};

export { DashHealth };