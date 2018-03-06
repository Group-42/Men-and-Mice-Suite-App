/*
    Dashboard.js

    Dashboard overview of the health of all the different systems, displayed in expandable/collapsible listview
 */
import React, {Component} from 'react';
import {ListView} from 'react-native';
import {connect} from 'react-redux';
import ListItem from './ListItem';

class Dashboard extends Component{
    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(this.props.libraries);
    }

    renderRow(library) {
        return <ListItem library={library}/>
    }

    render() {
        return(
            <ListView
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        );
    }
}

const mapStateToProps = state => {
    return { libraries: state.libraries };
};

export default connect(mapStateToProps)(Dashboard);