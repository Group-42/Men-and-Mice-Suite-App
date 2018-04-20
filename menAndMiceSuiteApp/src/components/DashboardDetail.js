import React, { Component } from 'react';
import { ScrollView, ListView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { CardSection, Header, BackButton } from "./common";
import DetailListItem from './DetailListItem';
import { DashHealth } from './DashHealth';

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

    onButtonPress() {
        this.props.afterPressAction = false;
        console.log('and this happens', this.props.afterPressAction);
        Actions.pop();
    }

    renderButton() {
        return(
            <BackButton onPress={this.onButtonPress.bind(this)}/>
        );
    }


    render(){
        const { dashboardStyle, endOfLineStyle, detailHeaderStyle } = styles;
        const {description, status } = this.props.subcategoryData;

        return(
            <View style={ dashboardStyle }>
                <Header headerText={'Details'}/>
                <View style={ detailHeaderStyle }>
                    {this.renderButton()}

                    <DashHealth healthStatus={ status }>
                        {description}
                    </DashHealth>
                </View>
                <ScrollView>
                    <CardSection>
                        <ListView
                            dataSource={ this.state.dataSource }
                            renderRow={ DashboardDetail.renderRow }
                        />
                    </CardSection>
                    <Text style={ endOfLineStyle }>
                        End of Line
                    </Text>
                </ScrollView>
            </View>
        );
    }
}

const styles = {
    detailHeaderStyle: {
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#f5f5f5'
    },
    dashboardStyle: {
        backgroundColor: '#29495B',
        flex: 1
    },
    endOfLineStyle: {
        fontFamily: 'ProximaNova-Bold',
        textAlign: 'center',
        color: '#f5f5f5'
    }
};

const mapStateToProps = ({selectedCategory}) => {
    const{subcategoryData, afterPressAction} = selectedCategory;
    return {subcategoryData, afterPressAction};
};

export default connect(mapStateToProps)(DashboardDetail);