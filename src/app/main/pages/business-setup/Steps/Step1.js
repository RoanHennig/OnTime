import React, { Component } from 'react';
import Form, { GroupItem, Item,  PatternRule, RequiredRule, Label } from 'devextreme-react/form';
import * as Actions from './store/actions';
import * as BusinessSetupActions from '../store/actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import validationEngine from 'devextreme/ui/validation_engine';
import service from './provices.js';

class Step1 extends Component {
    constructor(props) {
        super(props);

        this.props.setBusinessDetails(this.props.businessDetails);
        this.onRequiredFieldChanged = this.onRequiredFieldChanged.bind(this);     
      }  
      
      componentDidMount() {
        var result = validationEngine.validateGroup('businessData')
        if(result.isValid){
            this.props.setEnableNext();           
        }
        else {
            this.props.setDisableNext();
        }
    }

    render () {
        const {
            labelLocation,
            readOnly,
            showColon,
            colCount,
            businessDetails
          } = this.props.stepDetails;
          return (               
                <Form
                    id={'form'}                
                    onContentReady={this.onRequiredFieldChanged}
                    formData={businessDetails}
                    readOnly={readOnly}
                    showColonAfterLabel={showColon}
                    labelLocation={labelLocation}
                    colCount={colCount}
                    showValidationSummary={true}
                    validationGroup={'businessData'}
                    stylingMode= {'outlined'}
                    onFieldDataChanged = {this.onRequiredFieldChanged}
                    >
                    <GroupItem caption={'Business Details'}>
                        <Item dataField={'FirstName'}>
                            <RequiredRule message={'First Name is required'}/>
                            <PatternRule message={'Do not use digits in the First Name'}
                                        pattern={/^[^0-9]+$/} />
                        </Item>
                        <Item dataField={'LastName'}>
                            <RequiredRule message={'Last Name is required'}/>
                            <PatternRule message={'Do not use digits in the Last Name'}
                                        pattern={/^[^0-9]+$/} />
                        </Item>
                        <Item dataField={'BusinessName'}  >
                            <RequiredRule message={'Business Name is required'} />
                        </Item>
                        <Item dataField={'Phone'} editorOptions={{mask: '+27 00 000 0000',
                                maskRules: {
                                    X: /[02-9]/
                                },
                                useMaskedValue: true,
                                maskInvalidMessage: 'Must have a correct phone format'}} />
                        {/* <Item dataField={'Website'}> 
                            <Label text={'Your Business Website'} />
                        </Item> */}
                    </GroupItem>
                    <GroupItem caption={'Business Address'} > 
                        <Item dataField={'Address'} >
                            <RequiredRule message={'Address is required'} />
                        </Item>
                        <Item dataField={'City'} >
                            <RequiredRule message={'City is required'} />
                        </Item>
                        <Item dataField={'Province'} editorType={'dxSelectBox'} editorOptions={{ dataSource: service.getProvinces() }}>
                            <RequiredRule message={'Province is required'} />
                        </Item>
                        <Item dataField={'Zipcode'}>
                            <RequiredRule message={'Zipcode is required'} />
                        </Item>
                    </GroupItem>                
                </Form>
      )
    }

    onRequiredFieldChanged(e) {
        var result = validationEngine.validateGroup('businessData')
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
        stepDetails: state.businessSetupSteps.Step1
    };
}

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
        setBusinessDetails     : Actions.setBusinessDetails,
        setEnableNext             : BusinessSetupActions.setEnableNext,
        setDisableNext             : BusinessSetupActions.setDisableNext,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Step1);