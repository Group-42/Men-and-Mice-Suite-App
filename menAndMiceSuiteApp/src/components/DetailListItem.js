import React, {Component} from 'React';
import {Text} from 'react-native';
import {Card, CardSection} from './common';

class DetailListItem extends Component {
    render() {
        const {textStyle, cardSectionStyle} = styles;
        const {name, description, firstseen, severity} = this.props.detailData;

        return (
            <Card>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>Name: {name}</Text>
                </CardSection>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>Description: {description}</Text>
                </CardSection>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>First Seen: {firstseen}</Text>
                </CardSection>
                <CardSection style={cardSectionStyle}>
                    <Text style={textStyle}>Severity: {severity}</Text>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    textStyle: {
        fontFamily: 'ProximaNova-Light',
        color: '#f5f5f5'
    },
    cardSectionStyle: {
        borderColor: 'white',
        borderWidth: 1
    }
};

export default DetailListItem;