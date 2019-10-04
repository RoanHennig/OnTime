import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BusinessSetupActions from '../store/actions';
import React from 'react';

import DataGrid, {
  Column
} from 'devextreme-react/data-grid';
import service from './data.js';
import DiffCell from './DiffCell.js';
import ChartCell from './ChartCell.js';

class Step4 extends Component {
    constructor(props) {
        super(props);     
      }  
      
      
    render () {
        return (<div>

        </div>)
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