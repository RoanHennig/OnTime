import React, { useState } from 'react';
import { Menu, MenuItem, Icon, IconButton } from '@material-ui/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function InvoiceAppToolbarMenu() {
	const [ selectedOption, setSelectedOption ] = useState({
		id: null,
		menuEl: null
	});

	function handleDownloadInvoice() {
		const input = document.getElementById('appointmentinvoice');
		console.log(input);
		html2canvas(input, {
			allowTaint: true,
			foreignObjectRendering: true
		}).then((canvas) => {
			console.log(canvas);
			const imgData = canvas.toDataURL('image/png', 1.0);
			const pdf = new jsPDF('l', 'mm', 'a4');
			pdf.addImage(imgData, 'PNG', 100, 100, 250, 600);
			// pdf.output('dataurlnewwindow');
			pdf.save('download.pdf');
		});
	}

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
