// import libraries for making a component
import React from 'react';
import { Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import BurgerMenu from "./BurgerMenu";

// make a component
const Header = ({ onPress, headerText }) => {
    const { textStyle, viewStyle, boxStyle } = styles;

    return <View  style={ viewStyle }>
        <TouchableOpacity
            onPress={() => {
                Actions.pop();
                Actions.push('dashboard');
            }}
        >
            <Image
                source={require('../../icons/icon.png')}
                style={ boxStyle }
            />
        </TouchableOpacity>



        <Text style={textStyle}>{ headerText }</Text>

        <BurgerMenu headerText={ headerText }/>
    </View>
};

const styles = {
    viewStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        ...Platform.select({
                ios: {
                    alignItems: 'flex-end',
                    height: 75,
                },
                android: {
                    height: 61,
                },
        }),
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
        backgroundColor:'#29495b'
    }
};

// make the component available to other parts of the app
export { Header };