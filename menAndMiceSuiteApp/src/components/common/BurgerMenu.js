import React from 'react';
import {Text, View, Image} from 'react-native';
import {
    Menu,
    MenuProvider,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

const BurgerMenu = (props) => {
    const { container, popup } = styles;


    console.log('test2');

    return (
        <MenuProvider style={container}>
            <View>
                {console.log('works og Oddur vill einhverja stupid thumbs up so ok then.... thumbs up!!')}
                <Menu>
                    <MenuOptions>
                        <MenuOption onSelect={() => alert(`Save`)} text="Save" />
                        <MenuOption onSelect={() => alert(`Delete`)}>
                            <Text style={{ color: 'red' }}>Delete</Text>
                        </MenuOption>
                        <MenuOption
                            onSelect={() => alert(`Not called`)}
                            disabled={true}
                            text="Disabled"
                        />
                    </MenuOptions>
                </Menu>
            </View>
        </MenuProvider>
    );
};

const styles = {
    container: {
        backgroundColor: '#ecf0f1',
    },
    popup: {
        zIndex: 5,
        position: 'absolute',
    }
};

// make the component available to other parts of the app
export { BurgerMenu };

