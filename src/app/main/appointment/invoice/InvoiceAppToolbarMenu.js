import React, { useState } from 'react';
import { Menu, MenuItem, Icon, IconButton } from '@material-ui/core';

function InvoiceAppToolbarMenu() {
	const [ selectedOption, setSelectedOption ] = useState({
		id: null,
		menuEl: null
	});

	function handleDownloadInvoice() {}

	function handlePrintInvoice() {}

	function handleOpenOptionMenu(event) {
		setSelectedOption({
			id: selectedOption.id,
			menuEl: event.currentTarget
		});
	}

	function handleCloseOptionMenu() {
		setSelectedOption({
			id: selectedOption.id,
			menuEl: null
		});
	}

	return (
		<div>
			<IconButton
				aria-owns={selectedOption.menuEl ? 'invoice-menu' : undefined}
				aria-haspopup="true"
				onClick={handleOpenOptionMenu}
				className="mr-4 ml-2"
			>
				<Icon>more_vert</Icon>
			</IconButton>
			<Menu
				id="invoice-menu"
				anchorEl={selectedOption.menuEl}
				open={Boolean(selectedOption.menuEl)}
				onClose={handleCloseOptionMenu}
			>
				<MenuItem
					key={1}
					onClick={(ev) => {
						handleDownloadInvoice();
					}}
				>
					Download
				</MenuItem>

				<MenuItem
					key={2}
					onClick={(ev) => {
						handlePrintInvoice();
					}}
				>
					Print
				</MenuItem>
			</Menu>
		</div>
	);
}

export default InvoiceAppToolbarMenu;
