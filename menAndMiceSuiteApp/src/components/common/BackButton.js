import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


const BackButton = ({ onPress: onPress }) => {
    const { buttonStyle, arrowStyle } = styles;

    return (
        <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
            <Image
                source={require('../../icons/BackButton.png')}
                style={arrowStyle}
            />
        </TouchableOpacity>
    );
};

const styles = {
    buttonStyle: {
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#f7b52b',
        margin: 5,
        marginRight: 35
    },
    arrowStyle: {
        marginTop: 8,
        marginBottom: 8,
        marginLeft: 10,
        marginRight: 10,
        width: 20,
        height: 20
    }
};

export { BackButton };