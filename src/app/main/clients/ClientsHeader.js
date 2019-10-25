import React from 'react';
import { Icon, Input, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import { ThemeProvider } from '@material-ui/styles';
import { FuseAnimate } from '@fuse';

export default function ClientsHeader() {
	const dispatch = useDispatch();
	const searchText = useSelector(({ clientsApp }) => clientsApp.clients.searchText);
	const mainTheme = useSelector(({ fuse }) => fuse.settings.mainTheme);

	return (
		<div className="flex flex-1 items-center justify-between p-8 sm:p-24">
			<div className="flex flex-1 items-center justify-center pr-8 sm:px-12">
				<ThemeProvider theme={mainTheme}>
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Paper className="flex p-4 items-center w-full max-w-512 px-8 py-4" elevation={1}>
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
								onChange={(ev) => dispatch(Actions.setSearchText(ev))}
							/>
						</Paper>
					</FuseAnimate>
				</ThemeProvider>
			</div>
		</div>
	);
}
