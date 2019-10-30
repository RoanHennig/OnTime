import React, { useEffect, useCallback } from 'react';
import {
	TextField,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	Icon,
	IconButton,
	Typography,
	Toolbar,
	AppBar,
	Avatar
} from '@material-ui/core';
import Form, { GroupItem, Item, PatternRule, RequiredRule } from 'devextreme-react/form';
import { useForm } from '@fuse/hooks';
import FuseUtils from '@fuse/FuseUtils';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function ClientDialog() {
	const dispatch = useDispatch();
	const clientDialog = useSelector(({ clientsApp }) => clientsApp.client.clientDialog);

	const closeComposeDialog = () => {
		clientDialog.type === 'edit'
			? dispatch(Actions.closeEditClientDialog())
			: dispatch(Actions.closeNewClientDialog());
	};

	const canBeSubmitted = () => {
		return false;
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		/* 		if (clientDialog.type === 'new') {
			dispatch(Actions.addContact(form));
		} else {
			dispatch(Actions.updateContact(form));
		} */
		closeComposeDialog();
	};

	const handleRemove = () => {
		// dispatch(Actions.removeContact(form.id));
		closeComposeDialog();
	};

	return (
		<Dialog
			classes={{
				paper: 'm-24'
			}}
			{...clientDialog.props}
			onClose={closeComposeDialog}
			fullWidth
			maxWidth="md"
		>
			<AppBar position="static" elevation={1}>
				<Toolbar className="flex w-full">
					<Typography variant="subtitle1" color="inherit">
						{clientDialog.type === 'new' ? 'New Contact' : 'Edit Contact'}
					</Typography>
				</Toolbar>
				<div className="flex flex-col items-center justify-center pb-24">
					<Avatar className="w-96 h-96" alt="contact avatar" src="" />
					{clientDialog.type === 'edit' && <Typography variant="h6" color="inherit" className="pt-8" />}
				</div>
			</AppBar>
			<DialogContent classes={{ root: 'p-24' }}>
				<Form
					id={'clientForm'}
					formData={clientDialog.data}
					showColonAfterLabel={clientDialog.form.showColon}
					labelLocation={clientDialog.form.labelLocation}
					colCount={clientDialog.form.colCount}
					showValidationSummary={true}
					validationGroup={'clientDialog'}
					stylingMode={'outlined'}
				>
					<GroupItem caption={'General Information'} colCount={clientDialog.form.colCount}>
						<Item dataField={'FirstName'}>
							<RequiredRule message={'First Name is required'} />
							<PatternRule message={'Do not use digits in the First Name'} pattern={/^[^0-9]+$/} />
						</Item>
						<Item dataField={'LastName'}>
							<RequiredRule message={'Last Name is required'} />
							<PatternRule message={'Do not use digits in the Last Name'} pattern={/^[^0-9]+$/} />
						</Item>
						<Item
							dataField={'Gender'}
							editorType={'dxSelectBox'}
							editorOptions={{ dataSource: [ 'Female', 'Male' ] }}
						/>
						<Item dataField={'Birthday'} editorType={'dxDateBox'} />
						<Item dataField={'Notes'} colSpan={2} editorType={'dxTextArea'} />
					</GroupItem>
					<GroupItem caption={'Client Address'}>
						<Item dataField={'Address'} />
						<Item dataField={'City'} />
						<Item dataField={'Province'} />
						<Item dataField={'Zipcode'} />
					</GroupItem>
				</Form>
			</DialogContent>

			{clientDialog.type === 'new' ? (
				<DialogActions className="justify-between pl-16">
					<Button
						variant="contained"
						color="primary"
						onClick={handleSubmit}
						type="submit"
						disabled={!canBeSubmitted()}
					>
						Add
					</Button>
				</DialogActions>
			) : (
				<DialogActions className="justify-between pl-16">
					<Button
						variant="contained"
						color="primary"
						type="submit"
						onClick={handleSubmit}
						disabled={!canBeSubmitted()}
					>
						Save
					</Button>
					<IconButton onClick={handleRemove}>
						<Icon>delete</Icon>
					</IconButton>
				</DialogActions>
			)}
		</Dialog>
	);
}
