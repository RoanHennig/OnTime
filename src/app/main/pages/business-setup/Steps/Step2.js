import React, { Component } from 'react';
import * as Actions from './store/actions';
import * as BusinessSetupActions from '../store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import validationEngine from 'devextreme/ui/validation_engine';
import Form, { GroupItem, Item,  PatternRule, RequiredRule, Label } from 'devextreme-react/form';
import { SelectBox } from 'devextreme-react/select-box';
import service from './businessTypes.js';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.onRequiredFieldChanged = this.onRequiredFieldChanged.bind(this);     
        
      }  

      componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render () {
        // const {
        //     businessType
        //   } = this.props.stepDetails;
          return (
              <div>
                  <SelectBox className="mb-24" dataSource={service.getBusinessTypes()}
                  displayExpr={'Name'}
                  searchEnabled={true}
                  searchMode={'contains'}
                  searchExpr={'Name'}
                  searchTimeout={200}
                  minSearchLength={2}
                  stylingMode= {'outlined'}
                  showDataBeforeSearch={true} />

                  <SelectBox dataSource={service.getBusinessSize()}
                  displayExpr={'Name'}
                  searchEnabled={false}
                  stylingMode= {'outlined'}
                  showDataBeforeSearch={true} />
              </div>           
          )
    }

    onRequiredFieldChanged(e) {
        var result = validationEngine.validateGroup('businessType')
        if(result.isValid){
            this.props.setEnableNext();           
        }
        else {
            this.props.setDisableNext();
        }
    }
}

const mapStateToProps = state => {
    return {
        stepDetails: state.businessSetupSteps.Step2
    };
}

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
        setBusinessType             : Actions.setBusinessType,
        setEnableNext               : BusinessSetupActions.setEnableNext,
        setDisableNext              : BusinessSetupActions.setDisableNext,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step2);