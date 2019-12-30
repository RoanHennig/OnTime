import React from 'react';
import Form, { GroupItem, Item, PatternRule, RequiredRule } from 'devextreme-react/form';
import service from './data/provices.js';
import { useSelector } from 'react-redux';

function Step1(props) {
	const stepDetails = useSelector((state) => state.businessSetupSteps.Step1);
	stepDetails.businessDetails = props.businessDetails;

	const { labelLocation, readOnly, showColon, colCount } = stepDetails;

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
			stylingMode={'outlined'}
		>
			<GroupItem caption={'Business Details'}>
				<Item dataField={'firstName'}>
					<RequiredRule message={'First Name is required'} />
					<PatternRule message={'Do not use digits in the First Name'} pattern={/^[^0-9]+$/} />
				</Item>
				<Item dataField={'lastName'}>
					<RequiredRule message={'Last Name is required'} />
					<PatternRule message={'Do not use digits in the Last Name'} pattern={/^[^0-9]+$/} />
				</Item>
				<Item dataField={'businessName'}>
					<RequiredRule message={'Business Name is required'} />
				</Item>
				<Item
					dataField={'phone'}
					editorOptions={{
						mask: '+27 00 000 0000',
						maskRules: {
							X: /[02-9]/
						},
						useMaskedValue: true,
						maskInvalidMessage: 'Must have a correct phone format'
					}}
				/>
			</GroupItem>
			<GroupItem caption={'Business Address'}>
				<Item dataField={'address'}>
					<RequiredRule message={'Address is required'} />
				</Item>
				<Item dataField={'city'}>
					<RequiredRule message={'City is required'} />
				</Item>
				<Item
					dataField={'province'}
					editorType={'dxSelectBox'}
					editorOptions={{ dataSource: service.getProvinces() }}
				>
					<RequiredRule message={'Province is required'} />
				</Item>
				<Item dataField={'zipcode'}>
					<RequiredRule message={'Zipcode is required'} />
				</Item>
			</GroupItem>
		</Form>
	);
}

export default Step1;
