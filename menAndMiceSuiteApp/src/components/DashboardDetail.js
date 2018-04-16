import React, {Component} from 'react';
import {View, ListView} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Header} from "./common";
import DetailListItem from './DetailListItem';
import {DashHealth} from './DashHealth';

class DashboardDetail extends Component {
    constructor() {
        super();
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(['row 1', 'row 2'])
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.props.subcategoryData.notificationItems)
        });
    }

    static renderRow(detailData) {
        return <DetailListItem detailData={detailData}/>
    }


    render(){
        const {dashboardStyle} = styles;
        const {description, status} = this.props.subcategoryData;

        return(
            <View style={dashboardStyle}>
                <Header headerText={'Details'}/>
                <DashHealth healthStatus={status}>
                    {description}
                </DashHealth>
                <CardSection>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={DashboardDetail.renderRow}
                    />
                </CardSection>
            </View>
        );
    }
}

const styles = {
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    }
};

const mapStateToProps = ({selectedCategory}) => {
    const{subcategoryData} = selectedCategory;
    return {subcategoryData};
};

export default connect(mapStateToProps)(DashboardDetail);