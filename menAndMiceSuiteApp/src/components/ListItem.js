/*
    ListItem.js

    Lists the available options in the dashboard, when an item is expanded
 */
import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Image} from 'react-native';
import {connect} from 'react-redux';
import {CardSection} from './common';
import {DashHealth} from "./DashHealth";
import * as actions from '../actions/DashboardActions';

class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {subsectionStyle} = styles;
        const {library, expanded} = this.props;

        if(expanded){
            return(
                <CardSection>
                    <View  style={subsectionStyle}>
                        {library.items.map((r) => <DashHealth key={r}>{r}</DashHealth>)}
                    </View>
                </CardSection>
            );
        }
    }

    renderImage() {
        const {arrowStyle} = styles;

        if(this.props.expanded) {
            return(
                <Image
                    style={arrowStyle}
                    resizeMode='contain'
                    source={require('../icons/Dashboard_opened.png')}
                />
            );
        } else {
            return (
                <Image
                    style={arrowStyle}
                    resizeMode='contain'
                    source={require('../icons/Dashboard_closed.png')}
                />
            );
        }
    }


    render() {
        const {titleStyle, boxStyle, cardStyle} = styles;
        const {id, title} = this.props.library;
        const {library} = this.props;

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectCategory(id)}>
                <View>
                    <CardSection style={cardStyle}>
                        <Image
                            style={boxStyle}
                            resizeMode='contain'
                            source={require('../icons/Dashboard_greencheck.png')}
                        />
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                        {this.renderImage()}
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    cardStyle: {
        flexDirection: 'row',


    },
    titleStyle: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 30,
        color: '#f5f5f5',
        paddingLeft: 15,
        marginTop: 10,
        height: 40,
        flex: 1
    },
    boxStyle: {
        marginTop: 12,
        marginLeft: 6,
        width: 30,
        height: 30,
        borderColor: 'black',
        borderWidth: 1
    },
    subsectionStyle: {
        flexDirection: 'column',
        marginLeft: 25
    },
    arrowStyle: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 10,
        width: 15,
        height: 15
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedCategory === ownProps.library.id;
    return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);