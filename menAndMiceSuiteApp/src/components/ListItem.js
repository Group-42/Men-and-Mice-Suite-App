/*
    ListItem.js

    Lists the available options in the dashboard, when an item is expanded
 */
import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager} from 'react-native';
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
        const {library, expanded} = this.props;

        if(expanded){
            return(
                <CardSection>
                    <View  style={{flexDirection: 'column'}}>
                        {library.items.map((r) => <DashHealth key={r} style={styles.itemStyle}>{r}</DashHealth>)}
                    </View>
                </CardSection>
            );
        }
    }

    render() {
        const {titleStyle} = styles;
        const {id, title} = this.props.library;

        return(
            <TouchableWithoutFeedback onPress={() => this.props.selectCategory(id)}>
                <View>
                    <CardSection>
                        <Text style={titleStyle}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = {
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    },
    itemStyle: {
        paddingLeft: 10,
        paddingRight: 10
    }
};

const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedCategory === ownProps.library.id;
    return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);