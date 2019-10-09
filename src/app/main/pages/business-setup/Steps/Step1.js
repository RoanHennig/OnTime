import React from 'react';
import Form, { GroupItem, Item,  PatternRule, RequiredRule } from 'devextreme-react/form';
import * as BusinessSetupActions from '../store/actions';
import * as Actions from './store/actions';
import validationEngine from 'devextreme/ui/validation_engine';
import service from './provices.js';
import {connect, useSelector} from 'react-redux';
import {bindActionCreators} from 'redux';

function Step1(props) {     

    const stepDetails = useSelector(state => state.businessSetupSteps.Step1);
    stepDetails.businessDetails = props.businessDetails;
    const onRequiredFieldChanged = () => {

    }

    const {
        labelLocation,
        readOnly,
        showColon,
        colCount
      } = stepDetails;

          return (               
                <Form
                    id={'form'}                
                    formData={stepDetails.businessDetails}
                    readOnly={readOnly}
                    showColonAfterLabel={showColon}
                    labelLocation={labelLocation}
                    colCount={colCount}
                    showValidationSummary={true}
                    validationGroup={'businessData'}
                    stylingMode= {'outlined'}
                    >
                    <GroupItem caption={'Business Details'}>
                        <Item dataField={'FirstName'} editorOptions={{onValueChanged: onRequiredFieldChanged}}>
                            <RequiredRule message={'First Name is required'}/>
                            <PatternRule message={'Do not use digits in the First Name'}
                                        pattern={/^[^0-9]+$/} />
                        </Item>
                        <Item dataField={'LastName'} editorOptions={{onValueChanged: onRequiredFieldChanged}}>
                            <RequiredRule message={'Last Name is required'}/>
                            <PatternRule message={'Do not use digits in the Last Name'}
                                        pattern={/^[^0-9]+$/} />
                        </Item>
                        <Item dataField={'BusinessName'}  editorOptions={{onValueChanged: onRequiredFieldChanged}}>
                            <RequiredRule message={'Business Name is required'} />
                        </Item>
                        <Item dataField={'Phone'} editorOptions={{mask: '+27 00 000 0000',
                                maskRules: {
                                    X: /[02-9]/
                                },
                                useMaskedValue: true,
                                maskInvalidMessage: 'Must have a correct phone format'}} />
                    </GroupItem>
                    <GroupItem caption={'Business Address'} > 
                        <Item dataField={'Address'} editorOptions={{onValueChanged: onRequiredFieldChanged}} >
                            <RequiredRule message={'Address is required'} />
                        </Item>
                        <Item dataField={'City'} editorOptions={{onValueChanged: onRequiredFieldChanged}} >
                            <RequiredRule message={'City is required'} />
                        </Item>
                        <Item dataField={'Province'} editorType={'dxSelectBox'} editorOptions={{ dataSource: service.getProvinces() , onValueChanged: onRequiredFieldChanged}}>
                            <RequiredRule message={'Province is required'} />
                        </Item>
                        <Item dataField={'Zipcode'} editorOptions={{onValueChanged: onRequiredFieldChanged}}>
                            <RequiredRule message={'Zipcode is required'} />
                        </Item>
                    </GroupItem>                
                </Form>
      )
    }

    const mapDispatchToProps = dispatch =>
    {
        return bindActionCreators({
            setEnableNext               : BusinessSetupActions.setEnableNext,
            setDisableNext              : BusinessSetupActions.setDisableNext
        },
        dispatch);
    }

export default (connect(null, mapDispatchToProps)(Step1));