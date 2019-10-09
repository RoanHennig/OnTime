import React from 'react';
import * as Actions from './store/actions';
import * as BusinessSetupActions from '../store/actions';
import {connect, useSelector, useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import validationEngine from 'devextreme/ui/validation_engine';
import service from './businessTypes.js';
import Form, {Item, RequiredRule } from 'devextreme-react/form';
import reducer from '../store/reducers';

import withReducer from 'app/store/withReducer';
function Step2({setEnableNext, setDisableNext}) {

    const stepDetails = useSelector(state => state.businessSetupSteps.Step2);
    const {
        labelLocation,
        readOnly,
        showColon,
        colCount
      } = stepDetails;
      
      const onRequiredFieldChanged = () => {
        var result = validationEngine.validateGroup('businessType')
        if(result.isValid && stepDetails.businessTypeDetails.businessType && stepDetails.businessTypeDetails.businessType){ 
                setEnableNext();   
        }
        else {     
                setDisableNext();
        }
    }
          return (
                    <Form
                    id={'form'}
                    formData={stepDetails.businessTypeDetails}
                    readOnly={readOnly}
                    showColonAfterLabel={showColon}
                    labelLocation={labelLocation}
                    colCount={colCount}
                    showValidationSummary={true}
                    validationGroup={'businessType'}
                    stylingMode= {'outlined'}
                    onFieldDataChanged = {onRequiredFieldChanged}
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

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
        setEnableNext               : BusinessSetupActions.setEnableNext,
        setDisableNext              : BusinessSetupActions.setDisableNext,
    },
    dispatch);
}

export default (connect(null, mapDispatchToProps)(Step2));