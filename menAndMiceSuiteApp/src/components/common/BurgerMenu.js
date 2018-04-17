import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from "react-redux";
import { Actions } from 'react-native-router-flux';
import { logoutUser } from "../../actions";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

class BurgerMenu extends Component {

    render() {
        const { burgerStyle, menuStyle, textStyle } = styles;

        return(
            <Menu>
                <MenuTrigger>
                    <Image
                        style={ burgerStyle }
                        source={require('../../icons/hamburger.png')}
                    />
                </MenuTrigger>
                <MenuOptions style={ menuStyle }>
                    <MenuOption onSelect={() => Actions.dashboard()}>
                        <Text style={ textStyle }> Dashboard </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => Actions.troubleshoot()}>
                        <Text style={ textStyle }> Troubleshoot DNS </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => Actions.allocate()}>
                        <Text style={ textStyle }> Allocate IP </Text>
                    </MenuOption>
                    <MenuOption onSelect={() => Actions.settings()}>
                        <Text style={ textStyle }> Settings </Text>
                    </MenuOption>
                    <MenuOption onSelect={this.props.logoutUser.bind(this)}>
                        <Text style={ textStyle }> Log Out </Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        );
    }
}

const mapStateToProps = ({auth}) => {
    const {user} = auth;

    return {user};
};

const styles = {
    textStyle: {
        fontFamily: 'ProximaNova-Semibold',
        fontSize: 20,
        color: '#F7B52B'
    },
    menuStyle: {
        backgroundColor: '#19415F',
        borderWidth: 3,
        borderColor: '#F7B52B'
    },
    burgerStyle: {
        marginTop: 10,
        marginRight: 10,
        width: 40,
        height: 40,
    }
};

export default connect(mapStateToProps, {logoutUser})(BurgerMenu);