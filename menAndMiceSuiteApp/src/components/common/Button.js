import React, { Component } from 'react';
import { Text, TouchableOpacity, Keyboard } from 'react-native';
import PropTypes from 'prop-types';


class Button extends Component {
    render() {
        const {children, onPress, buttonStyle, textStyle} = this.props;

        return (
            <TouchableOpacity onPress={onPress} style={buttonStyle}>
                <Text style={textStyle}>
                    {children}
                </Text>
            </TouchableOpacity>
        );
    };
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onPress: PropTypes.func.isRequired,
    textStyle: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.shape({}),
    ]),
    buttonStyle: PropTypes.oneOfType([
        PropTypes.array,
        PropTypes.number,
        PropTypes.shape({}),
    ]).isRequired,
};

export { Button };