import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BusinessSetupActions from '../store/actions';

class Step3 extends Component {
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
        stepDetails: state.businessSetupSteps.Step3
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

export default connect(mapStateToProps, mapDispatchToProps)(Step3);