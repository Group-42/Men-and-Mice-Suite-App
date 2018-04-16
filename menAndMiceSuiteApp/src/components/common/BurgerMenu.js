import React, {Component} from 'react';
import {Image} from 'react-native';
import {connect} from "react-redux";
import {Actions} from 'react-native-router-flux';
import {logoutUser} from "../../actions";
import {
    Menu,
    MenuOptions,
    MenuOption,
    MenuTrigger,
} from 'react-native-popup-menu';

class BurgerMenu extends Component {

    render() {
        return(
            <Menu>
                <MenuTrigger>
                    <Image
                        style={styles.burgerStyle}
                        source={require('../../icons/hamburger.png')}
                    />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => Actions.dashboard()} text='Dashboard'/>
                    <MenuOption onSelect={() => alert(`Troubleshoot DNS, Coming Soon`)} text='Troubleshoot DNS'/>
                    <MenuOption onSelect={() => alert(`Allocate IP, Coming Soon`)} text='Allocate IP'/>
                    <MenuOption onSelect={() => Actions.testArea()} text='Settings'/>
                    <MenuOption onSelect={this.props.logoutUser.bind(this)} text='Log Out'/>
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
    burgerStyle: {
        top: 10,
        right: 10,
        width: 40,
        height: 40,
        backgroundColor:'#29495b',
    }
};

export default connect(mapStateToProps, {logoutUser})(BurgerMenu);