/*
    Dashboard.js

    Dashboard overview of the health of all the different systems, displayed in expandable/collapsible listview
 */
import React, { Component } from 'react';
import { View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';
import { Header, Spinner } from "./common";
import { getHealthStatusBar } from "../actions";

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.props.getHealthStatusBar();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.data);
    }

    componentDidMount() {
        this.updateDataSource(this.props.data);
    }

    componentWillReceiveProps(nextProps) {
        this.updateDataSource(nextProps.data);
    }

    updateDataSource(data) {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(data);
    }

    // renders a spinner while the app is fetching the data, otherwise renders the dashboard
    renderDash() {
        if(this.props.isFetching || this.props.afterPressAction) {
            return <Spinner size="large"/>
        }
        else if (this.props.error) {
            return(
                <View style={ styles.errorViewStyle }>
                    <Text style={ styles.errorTextStyle }>{ this.props.error }</Text>
                </View>
            );
        }
        else {
            return (
                <ListView
                    dataSource={ this.dataSource }
                    renderRow={ this.renderRow }
                    enableEmptySections={ true }
                />
            );
        }
    }

    // renders all the subcategories for the chosen category
    renderRow( library ) {
        return <ListItem library={ library }/>
    }

    // renders the whole screen
    render() {
        const { dashboardStyle } = styles;

        return(
            <View style={ dashboardStyle }>
                <Header headerText={'Dashboard'}/>
                { this.renderDash() }
            </View>
        );
    }
}

const mapStateToProps = ({ healthStatus, selectedCategory }) => {
    const { isFetching, data, error } = healthStatus;
    const { afterPressAction } = selectedCategory;
    return { isFetching, data, error, afterPressAction };
};

const styles = {
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    errorViewStyle:{
        justifyContent: 'center',
        flex: 1,
    },
    errorTextStyle: {
        fontFamily: 'ProximaNova-Light',
        fontSize: 20,
        alignSelf: 'center',
        color: '#dc143c',
    }
};
export default connect( mapStateToProps,{ getHealthStatusBar })( Dashboard );
