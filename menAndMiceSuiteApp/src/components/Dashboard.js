/*
    Dashboard.js

    Dashboard overview of the health of all the different systems, displayed in expandable/collapsible listview
 */
import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import {Header} from "./common";
import {getHealthStatusBar} from "../actions";

class Dashboard extends Component{
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.dataSource = ds.cloneWithRows(this.props.libraries);
        getHealthStatusBar();
    }

    renderRow(library) {
        return <ListItem library={library}/>
    }

    render() {
        const {dashboardStyle} = styles;

        return(
            <View style={dashboardStyle}>
                <Header headerText={'Dashboard'}/>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    /*const {data} = healthStatus;
    return {data};*/
    return { libraries: state.libraries };
};

const styles = {
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};
export default connect(mapStateToProps)(Dashboard);