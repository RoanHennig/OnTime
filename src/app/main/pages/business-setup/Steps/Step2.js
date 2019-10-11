import React from 'react';
import {useSelector} from 'react-redux';
import service from './data/businessTypes.js';
import Form, {Item, RequiredRule } from 'devextreme-react/form';

function Step2() {

    const stepDetails = useSelector(state => state.businessSetupSteps.Step2);
    const {
        labelLocation,
        readOnly,
        showColon,
        colCount
      } = stepDetails;
      
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

export default (Step2);