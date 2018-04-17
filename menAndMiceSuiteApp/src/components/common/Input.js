import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
        <View style={ containerStyle }>
            <Text style={ labelStyle }>{ label }</Text>
            <TextInput
                secureTextEntry={ secureTextEntry }
                placeholder={ placeholder }
                placeholderTextColor="grey"
                underlineColorAndroid='#f5f5f5'
                autoCorrect={ false }
                style={ inputStyle }
                value={ value }
                onChangeText={ onChangeText }
            />
        </View>
    );
};

const styles = {
    inputStyle: {
        fontFamily: 'ProximaNova-Regular',
        color: '#f5f5f5',
        paddingRight: 5,
        paddingLeft: 5,
        marginLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 1.9
    },
    labelStyle: {
        fontFamily: 'ProximaNova-Regular',
        fontSize: 18,
        color: '#f5f5f5',
        paddingLeft: 12,
        paddingRight: 2,
        flex: 1.1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };