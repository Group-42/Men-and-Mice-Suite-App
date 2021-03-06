/*
    ListItem.js

    Lists the available options in the dashboard, when an item is expanded
 */
import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, Image } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import { DashHealth } from "./DashHealth";
import { selectSubcategory, selectCategory } from '../actions/DashboardActions';

class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    // renders subcategories when category is pressed and expands
    // there is a special case when there is only one subcategory, since they are structured differently
    renderSubcategories() {
        const { subsectionStyle, infoImageStyle } = styles;
        const { library, expanded } = this.props;
        if(expanded){
            if(library.subNotifications.length > 1) {
                return (
                    <CardSection>
                        <View style={ subsectionStyle }>
                            {library.subNotifications.map((r) => <DashHealth
                                healthStatus={ r.status }
                                onPress={ () => this.props.selectSubcategory(r) }
                                key={ r }>
                                { r.description }
                                <Image
                                    source={ require('../icons/info_icon.png') }
                                    style={ infoImageStyle }
                                />
                                </DashHealth>)}
                        </View>
                    </CardSection>
                );
            }
            else if(library.subNotifications.lenght = 1) {
                return (
                    <CardSection>
                        <View style={ subsectionStyle }>
                            <DashHealth
                                healthStatus={ library.subNotifications.notifications.status }
                                onPress={ () => this.props.selectSubcategory(library.subNotifications.notifications) }>
                                    { library.subNotifications.notifications.description }
                                <Image
                                    source={ require('../icons/info_icon.png') }
                                    style={ infoImageStyle }
                                />
                            </DashHealth>
                        </View>
                    </CardSection>
                );
            }
        }
    }

    // renders the icon indicator for an open or closed accordion menu
    renderImage() {
        const { arrowStyle } = styles;

        if(this.props.expanded) {
            return(
                <Image
                    source={ require('../icons/Dashboard_opened.png') }
                    style={ arrowStyle }
                />
            );
        } else {
            return (
                <Image
                    source={ require('../icons/Dashboard_closed.png') }
                    style={ arrowStyle }
                />
            );
        }
    }

    // renders the correct health indicator for the categories
    renderHealthStatus(healthStatus) {
        const {boxStyle} = styles;

        switch(healthStatus){
            case 'ok':
                return(
                    <Image
                        source={ require('../icons/Dashboard_greencheck.png') }
                        style={ boxStyle }
                    />
                );
            case 'warning':
                return (
                    <Image
                        source={ require('../icons/Dashboard_yellowwarning.png') }
                        style={ boxStyle }
                    />
                );
            default:
                return (
                    <Image
                        source={ require('../icons/Dashboard_rederror.png') }
                        style={ boxStyle }
                    />
                );
        }
    }

    // expands and collapses the accordion menu when the same category is pressed multiple times
    toExpandOrNotToExpand(description) {
        if(this.props.expanded) {
            this.props.selectCategory('');
        }
        else{
            this.props.selectCategory(description);
        }
    }

    // renders the whole screen
    render() {
        const { titleStyle, cardStyle } = styles;
        const { description, status } = this.props.library;

        return(
            <TouchableWithoutFeedback onPress={ () => this.toExpandOrNotToExpand(description) }>
                <View>
                    <CardSection style={ cardStyle }>
                        { this.renderHealthStatus(status) }
                        <Text style={ titleStyle }>
                            { description }
                        </Text>
                        { this.renderImage() }
                    </CardSection>
                    { this.renderSubcategories() }
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
        borderColor: '#000',
        borderWidth: 1
    },
    subsectionStyle: {
        flexDirection: 'column',
        marginLeft: 25
    },
    infoImageStyle: {
        width: 55,
        height: 55
    },
    arrowStyle: {
        marginTop: 20,
        marginLeft: 25,
        marginRight: 10,
        width: 15,
        height: 15
    }
};

const mapStateToProps = ( state, ownProps ) => {
    const expanded = state.selectedCategory === ownProps.library.description;
    return { expanded };
};

export default connect( mapStateToProps, { selectSubcategory, selectCategory })( ListItem );