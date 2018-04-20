/*
    DashHealth.js

    simple text field with a colored box.
    Used to indicate health status on the dashboard
 */
import React from 'react';
import {TouchableOpacity, Text, Image, View} from 'react-native';

const DashHealth = ({ children, healthStatus, onPress, pressed }) => {
    const {viewStyle, textStyle, boxStyle} = styles;

    if(healthStatus === 'ok')
    {
        return(
            <View style={ viewStyle }>
                <Image
                    source={require('../icons/Dashboard_greencheck.png')}
                    style={boxStyle}
                />

                <Text style={textStyle}>
                    {children}
                </Text>
            </View>
        );
    }
    else if( healthStatus === 'warning'){
        return(
            <TouchableOpacity onPress={ onPress } style={viewStyle} key={ pressed }>
                <Image
                    source={require('../icons/Dashboard_yellowwarning.png')}
                    style={boxStyle}
                />

                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }
    else{
        return(
            <TouchableOpacity onPress={ onPress } style={ viewStyle } key={ pressed }>
                <Image
                    source={require('../icons/Dashboard_rederror.png')}
                    style={boxStyle}
                />

                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    }
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
        borderColor: '#000',
        borderWidth: 1
    }
};

export { DashHealth };