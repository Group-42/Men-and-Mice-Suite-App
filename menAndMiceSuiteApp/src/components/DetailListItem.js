import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection } from './common';

class DetailListItem extends Component {
    render() {
        const { textStyle, endOfCardStyle, textStyleHeader } = styles;
        const { name, description, firstseen, severity } = this.props.detailData;

        return (
            <Card>
                <CardSection>
                    <Text style={ textStyleHeader }> Name: </Text>
                    <Text style={ textStyle }> { name }</Text>
                </CardSection>
                <CardSection>
                    <Text style={ textStyleHeader }> Description: </Text>
                    <Text style={ textStyle }> { description }</Text>
                </CardSection>
                <CardSection>
                    <Text style={ textStyleHeader }> First Seen: </Text>
                    <Text style={ textStyle }> { firstseen }</Text>
                </CardSection>
                <CardSection>
                    <Text style={ textStyleHeader }> Severity: </Text>
                    <Text style={ textStyle }> { severity }</Text>
                </CardSection>
                <View style={ endOfCardStyle }/>
            </Card>
        );
    }
}

const styles = {
    textStyleHeader: {
        fontFamily: 'ProximaNova-Bold',
        color: '#f5f5f5'
    },
    textStyle: {
        fontFamily: 'ProximaNova-Light',
        color: '#f5f5f5',
        paddingRight: 80
    },
    endOfCardStyle: {
        borderWidth: 1,
        borderColor: "#f5f5f5",
        marginTop: 25,
        marginBottom: 10
    }
};

export default DetailListItem;