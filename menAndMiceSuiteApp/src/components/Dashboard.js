/*
    Dashboard.js

    Dashboard overview of the health of all the different systems, displayed in expandable/collapsible listview
 */
import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {Header, Spinner} from "./common";
import {getHealthStatusBar, getHealthStatusBar2} from "../actions";

class Dashboard extends Component{
    constructor(props) {
        super(props);
        this.props.getHealthStatusBar();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.data);
        /*this.state = {
            dataSource: ds.cloneWithRows(this.props.data)
        };*/
    }

    componentDidMount() {
        console.log('DATA: ', this.props.data);
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

    renderDash()
    {
        if(this.props.isFetching)
        {
            return <Spinner size="large"/>
        }
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
                enableEmptySections={true}
            />
        );
    }

    renderRow(library) {
        return <ListItem library={library}/>
    }

    render() {
        const {dashboardStyle} = styles;

        return(
            <View style={dashboardStyle}>
                <Header headerText={'Dashboard'}/>
                {this.renderDash()}
            </View>
        );
    }
}

const mapStateToProps = ({healthStatus}) => {
    const {isFetching, data} = healthStatus;
    return {isFetching, data};
    //return {libraries: state.libraries};
};

const styles = {
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};
export default connect(mapStateToProps,{getHealthStatusBar})(Dashboard);