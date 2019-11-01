import React from 'react';
import {
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
import Form, { GroupItem, Item, PatternRule, RequiredRule, Tab, TabbedItem } from 'devextreme-react/form';
import * as Actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import validationEngine from 'devextreme/ui/validation_engine';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
	closeButton: {
		position: 'absolute',
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.white
	}
}));

export default function ClientDialog() {
	const classes = useStyles();
	const dispatch = useDispatch();
	const clientDialog = useSelector(({ clientsApp }) => clientsApp.client.clientDialog);

	const closeComposeDialog = () => {
		clientDialog.type === 'edit'
			? dispatch(Actions.closeEditClientDialog())
			: dispatch(Actions.closeNewClientDialog());
	};

	const handleSubmit = () => {
		const result = validationEngine.validateGroup('clientDialog');

		if (result.isValid) {
			/* 		if (clientDialog.type === 'new') {
			dispatch(Actions.addContact(form));
		} else {
			dispatch(Actions.updateContact(form));
		} */
			closeComposeDialog();
		}
	};

	const handleValidationCheck = () => {
		validationEngine.validateGroup('clientDialog');
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
					<IconButton
						aria-label="close"
						className={classes.closeButton + ' float-right'}
						onClick={closeComposeDialog}
					>
						<CloseIcon />
					</IconButton>
				</Toolbar>
				<div className="flex flex-col items-center justify-center pb-24">
					<Avatar className="w-96 h-96" alt="contact avatar" src={'assets/images/avatars/profile.jpg'} />
					{clientDialog.type === 'edit' && <Typography variant="h6" color="inherit" className="pt-8" />}
				</div>
			</AppBar>
			<DialogContent classes={{ root: 'pl-24 pt-4' }}>
				<Form
					id={'clientForm'}
					formData={clientDialog.data}
					showColonAfterLabel={clientDialog.form.showColon}
					labelLocation={clientDialog.form.labelLocation}
					onContentReady={handleValidationCheck}
					validationGroup={'clientDialog'}
					stylingMode={'outlined'}
				>
					<TabbedItem tabPanelOptions={{ deferRendering: false }}>
						<Tab title={'General Information'} colCount={clientDialog.form.colCount}>
							<GroupItem caption={'Personal Information'}>
								<Item dataField={'firstName'}>
									<RequiredRule message={'First Name is required'} />
									<PatternRule
										message={'Do not use digits in the First Name'}
										pattern={/^[^0-9]+$/}
									/>
								</Item>
								<Item dataField={'lastName'}>
									<RequiredRule message={'Last Name is required'} />
									<PatternRule message={'Do not use digits in the Last Name'} pattern={/^[^0-9]+$/} />
								</Item>
								<Item
									dataField={'gender'}
									editorType={'dxSelectBox'}
									editorOptions={{ dataSource: [ 'Female', 'Male' ] }}
								/>
								<Item
									dataField={'birthDate'}
									editorType={'dxDateBox'}
									editorOptions={{
										width: '100%',
										min: new Date(1900, 1, 1),
										max: new Date(),
										displayFormat: 'd of MMM'
									}}
								/>
							</GroupItem>
							<GroupItem caption={'Contact Information'}>
								<Item dataField={'email'} />
								<Item
									dataField={'mobile'}
									editorOptions={{
										mask: '+27 00 000 0000',
										maskRules: {
											X: /[02-9]/
										},
										useMaskedValue: true,
										maskInvalidMessage: 'Must have a correct phone format'
									}}
								>
									<RequiredRule message={'A mobile number is required'} />
								</Item>
							</GroupItem>
						</Tab>
						<Tab title={'Address'}>
							<GroupItem caption={'Client Address'}>
								<Item dataField={'address'} />
								<Item dataField={'city'} />
								<Item dataField={'zipCode'} />
							</GroupItem>
						</Tab>
						<Tab title={'Appointment'}>
							<GroupItem caption={'Appointment Information'}>
								<Item
									dataField={'notifications'}
									editorType={'dxSelectBox'}
									editorOptions={{
										dataSource: [
											{
												id: 1,
												value: 'Email & SMS'
											},
											{
												id: 2,
												value: 'Email'
											},
											{
												id: 3,
												value: 'SMS'
											},
											{
												id: 4,
												value: 'None'
											}
										],
										displayExpr: 'value',
										valueExpr: 'id'
									}}
								/>
								<Item dataField={'sendMarketingNotifications'} editorType={'dxCheckBox'} />
								<Item dataField={'notes'} colSpan={2} editorType={'dxTextArea'} />
								<Item dataField={'alwaysShowAppointmentNotes'} editorType={'dxCheckBox'} />
							</GroupItem>
						</Tab>
					</TabbedItem>
				</Form>
			</DialogContent>

			{clientDialog.type === 'new' ? (
				<DialogActions className="justify-between pl-32">
					<Button variant="contained" color="secondary" onClick={handleSubmit} type="submit">
						Add
					</Button>
				</DialogActions>
			) : (
				<DialogActions className="justify-between pl-32">
					<Button variant="contained" color="secondary" type="submit" onClick={handleSubmit}>
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
