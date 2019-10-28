import React from 'react';
import { Icon, Input, Paper, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';
import Typography from '@material-ui/core/Typography';
import PersonAddSharpIcon from '@material-ui/icons/PersonAddSharp';

export default function ClientsHeader() {
	const dispatch = useDispatch();
	const searchText = useSelector(({ clientsApp }) => clientsApp.clients.searchText);
	const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);

	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex items-center">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<Icon className="text-32 mr-0 sm:mr-12">contacts</Icon>
				</FuseAnimate>

				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<Typography className="hidden sm:flex" variant="h6">
						Clients
					</Typography>
				</FuseAnimate>
			</div>

			<div className="flex flex-1 items-center justify-center pr-0 pl-12 sm:px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideDownIn" delay={300}>
						<React.Fragment>
							<Paper className="flex items-center w-full max-w-512 px-8 py-4 rounded-8" elevation={1}>
								<Icon className="mr-8" color="action">
									search
								</Icon>

								<Input
									placeholder="Find a client"
									className="flex flex-1"
									disableUnderline
									fullWidth
									value={searchText}
									inputProps={{
										'aria-label': 'Search'
									}}
									onChange={(ev) => dispatch(Actions.setClientsSearchText(ev))}
								/>
							</Paper>
							<Button
								variant="contained"
								color="secondary"
								className="m-16"
								startIcon={<PersonAddSharpIcon />}
							>
								Add Client
							</Button>
						</React.Fragment>
					</FuseAnimate>
				</ThemeProvider>
			</div>
		</div>
	);
}
