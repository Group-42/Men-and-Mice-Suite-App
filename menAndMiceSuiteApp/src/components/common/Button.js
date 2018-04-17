import React from 'react';
import { Text, TouchableOpacity } from 'react-native';


const Button = ({ onPress: onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
            <Text style={ textStyle }>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#f7b52b',
        fontFamily: 'ProximaNova-Bold',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50
    }
};

export { Button };