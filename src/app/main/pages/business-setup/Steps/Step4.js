import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BusinessSetupActions from '../store/actions';
import React from 'react';
import DataGrid, {Column, Button} from 'devextreme-react/data-grid';
import service from './Step4.data.js';
import DiffCell from './DiffCell.js';
import ChartCell from './ChartCell.js';

class Step4 extends Component {
    constructor(props) {
        super(props);     
        this.dataSource = service.getStaffData();
      }  
      
      
    render () {
        return (      
        <div>
            <DataGrid id={'gridContainer'}
                dataSource={this.dataSource}
                showRowLines={true}
                showColumnLines={false}
                showBorders={true}>
                <Paging enabled={false} />
                <Sorting mode={'none'} />
                <Column dataField={'date'} width={110} dataType={'date'} />
                <Column caption={'Open'} cellRender={DiffCell} />
                <Column caption={'Close'} cellRender={DiffCell} />
                <Column caption={'Dynamics'} minWidth={320} cellRender={ChartCell} />
                <Column caption={'High'} cellRender={DiffCell} />
                <Column caption={'Low'} cellRender={DiffCell} />
                <Column type="buttons">
                    <Button />
                    {/* Declare and configure custom buttons here */}
                </Column>
            </DataGrid>
            <Button >
                Add Staff
            </Button>
        </div>
      )
    }
}

const mapStateToProps = state => {
    return {
        stepDetails: state.businessSetupSteps.Step4
    };
}

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
        setEnableNext               : BusinessSetupActions.setEnableNext,
        setDisableNext              : BusinessSetupActions.setDisableNext,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step4);