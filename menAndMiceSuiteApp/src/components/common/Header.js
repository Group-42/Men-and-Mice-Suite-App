// import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableNativeFeedback } from 'react-native';
import { BurgerMenu } from "./BurgerMenu";

// make a component
const Header = ({ onPress, headerText }) => {
    const { textStyle, viewStyle, boxStyle, burgerStyle } = styles;

    return <View style={viewStyle}>
        <Image
            style={boxStyle}
            resizeMode='contain'
            source={require('../../icons/icon.png')}
        />

        <Text style={textStyle}>{headerText}</Text>

        <TouchableNativeFeedback onPress={ onPress }>
            <Image
                style={burgerStyle}
                source={require('../../icons/hamburger.png')}
            />
        </TouchableNativeFeedback>
    </View>;
};

const styles = {
    viewStyle: {
        backgroundColor: '#29495b',
        justifyContent: 'space-between',
        flexDirection: 'row',
        height: 61,
        position: 'relative',
        borderBottomWidth: 1,
        borderColor: '#f5f5f5'
    },
    textStyle: {
        fontFamily: 'ProximaNova-Light',
        paddingTop: 13,
        fontSize: 28,
        color: '#f5f5f5'
    },
    boxStyle: {
        top: 2.5,
        left: 2.5,
        width: 55,
        height: 55,
        backgroundColor:'#29495b',
    },
    burgerStyle: {
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        backgroundColor:'#29495b',
    }
};

// make the component available to other parts of the app
export { Header };