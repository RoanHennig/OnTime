import React, { Component } from 'react';
import * as Actions from './store/actions';
import * as BusinessSetupActions from '../store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import validationEngine from 'devextreme/ui/validation_engine';
import service from './businessTypes.js';
import Form, {Item, RequiredRule } from 'devextreme-react/form';

class Step2 extends Component {
    constructor(props) {
        super(props);
        this.onRequiredFieldChanged = this.onRequiredFieldChanged.bind(this); 
      }  
      
      componentDidMount() {
        window.scrollTo(0, 0);
      }
      
    render () {
        const {
            labelLocation,
            readOnly,
            showColon,
            colCount
          } = this.props.stepDetails;
          return (
                    <Form
                    id={'form'}
                    formData={this.props.stepDetails.businessTypeDetails}
                    readOnly={readOnly}
                    showColonAfterLabel={showColon}
                    labelLocation={labelLocation}
                    colCount={colCount}
                    showValidationSummary={true}
                    validationGroup={'businessType'}
                    stylingMode= {'outlined'}
                    onFieldDataChanged = {this.onRequiredFieldChanged}
                    >           
                        <Item dataField={'businessType'} editorType={'dxSelectBox'} editorOptions={{ dataSource: service.getBusinessTypes(),
                            displayExpr:'Name',
                            searchEnabled:true,
                            searchMode:'contains',
                            searchExpr:'Name',
                            searchTimeout:200,
                            minSearchLength:2,
                            placeholder:'what describes your business best...',
                            showDataBeforeSearch:true
                            }}>
                            <RequiredRule message={'Business Type is required'} />
                        </Item>  
                        <Item dataField={'businessSize'} editorType={'dxSelectBox'} editorOptions={{ dataSource: service.getBusinessSize(),
                            displayExpr:'Name',                    
                            placeholder:'how many members are there within your business...',
                            searchEnabled:false,
                            showDataBeforeSearch:true
                            }}>
                            <RequiredRule message={'Business Size is required'} />
                        </Item>  
                    </Form>
          )
    }

    onRequiredFieldChanged(e) {
        var result = validationEngine.validateGroup('businessType')
        if(result.isValid && this.props.stepDetails.businessTypeDetails.businessType && this.props.stepDetails.businessTypeDetails.businessType){
            this.props.setEnableNext();       
            console.log(this.props.stepDetails.businessTypeDetails);    
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