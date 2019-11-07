import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';

function InvoiceAppToolbarMenu() {
	function handleDownloadInvoice() {
		const input = document.getElementById('appointmentinvoice');
		html2canvas(input, {
			allowTaint: true,
			foreignObjectRendering: true
		}).then((canvas) => {
			const imgData = canvas.toDataURL('image/png', 1.0);
			const pdf = new jsPDF('l', 'mm', 'a4');
			pdf.addImage(imgData, 'PNG', 100, 100, 250, 600);
			// pdf.output('dataurlnewwindow');
			pdf.save('download.pdf');
		});
	}

	function handlePrintInvoice() {}

	return (
		<div className="flex flex-1 items-center sm:px-8 mr-16">
			<Tooltip title="Download Invoice" placement="top">
				<IconButton
					aria-label="Download Invoice"
					onClick={(ev) => {
						handleDownloadInvoice();
					}}
				>
					<GetAppIcon />
				</IconButton>
			</Tooltip>

			<Tooltip title="Print Invoice" placement="top">
				<IconButton
					aria-label="Print Invoice"
					onClick={(ev) => {
						handlePrintInvoice();
					}}
				>
					<PrintIcon />
				</IconButton>
			</Tooltip>
		</div>
	);
}

export default InvoiceAppToolbarMenu;
