import React from 'react';
import { IconButton, Tooltip } from '@material-ui/core';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import GetAppIcon from '@material-ui/icons/GetApp';
import PrintIcon from '@material-ui/icons/Print';

function InvoiceAppToolbarMenu() {
	function saveAs(uri, filename) {
		var link = document.createElement('a');

		if (typeof link.download === 'string') {
			link.href = uri;
			link.download = filename;

			//Firefox requires the link to be in the body
			document.body.appendChild(link);

			//simulate click
			link.click();

			//remove the link when done
			document.body.removeChild(link);
		} else {
			window.open(uri);
		}
	}

	function handleDownloadInvoice() {
		const input = document.getElementById('appointmentinvoice');
		html2canvas(input).then((canvas) => {
			const imgData = canvas.toDataURL('image/png');
			var doc = new jsPDF('p', 'mm', 'a4');

			var width = doc.internal.pageSize.getWidth();
			var height = doc.internal.pageSize.getHeight();
			doc.addImage(imgData, 'JPEG', 0, 0, width, height);
			doc.save('download.pdf');
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
