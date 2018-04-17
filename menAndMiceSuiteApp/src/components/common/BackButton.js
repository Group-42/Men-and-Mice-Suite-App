import React from 'react';
import { Image, TouchableOpacity } from 'react-native';


const BackButton = ({ onPress: onPress }) => {
    const { buttonStyle, arrowStyle } = styles;

    return (
        <TouchableOpacity onPress={ onPress } style={ buttonStyle }>
            <Image
                style={arrowStyle}
                resizeMode='contain'
                source={require('../../icons/BackButton.png')}
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
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        width: 15,
        height: 15
    }
};

export { BackButton };