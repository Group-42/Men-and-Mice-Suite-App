/*
    Dashboard.js

    Dashboard overview of the health of all the different systems, displayed in expandable/collapsible listview
 */
import React, { Component } from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';
import BackgroundTask from 'react-native-background-task';
import ListItem from './ListItem';
import {Header, Spinner} from "./common";
import { getHealthStatusBar } from "../actions";

BackgroundTask.define(async () => {
    this.props.getHealthStatusBar();
    console.log('this is some text');

    BackgroundTask.finish();
});

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
        BackgroundTask.schedule();

        this.checkStatus();
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

    async checkStatus() {
        const status = await BackgroundTask.statusAsync();
        if(status.available){
            return;
        }

        const reason = status.unavailableReason;
        if(reason === BackgroundTask.UNAVAILABLE_DENIED){
            alert('Denied', 'Please enable "Background App Refresh" for this app');
        }
        else if (reason === BackgroundTask.UNAVAILABLE_RESTRICTED){
            alert('Restricted', 'Background tasks are restricted on your device');
        }
    }

    renderDash() {
        if(this.props.isFetching)
        {
            return <Spinner size="large"/>
        }
        return(
            <ListView
                dataSource={ this.dataSource }
                renderRow={ this.renderRow }
                enableEmptySections={ true }
            />
        );
    }

    renderRow( library ) {
        return <ListItem library={ library }/>
    }


    render() {
        const {dashboardStyle} = styles;

        return(
            <View style={ dashboardStyle }>
                <Header headerText={'Dashboard'}/>
                { this.renderDash() }
            </View>
        );
    }
}

const mapStateToProps = ({ healthStatus }) => {
    const { isFetching, data } = healthStatus;
    return { isFetching, data };
};

const styles = {
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 3,
        borderColor: '#f7b52b',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50
    }
};
export default connect( mapStateToProps,{ getHealthStatusBar })( Dashboard );
