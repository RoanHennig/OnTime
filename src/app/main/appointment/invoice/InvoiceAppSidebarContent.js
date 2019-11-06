import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import SendIcon from '@material-ui/icons/Send';

function InvoiceAppSidebarContent() {
	return (
		<FuseAnimate animation="transition.slideUpIn" delay={400}>
			<div className="flex-auto border-l-1">
				<div className="pt-20 pl-20 pr-20">
					<TextField
						className="mb-24"
						label="Email"
						id="email"
						name="email"
						margin="dense"
						variant="outlined"
						fullWidth
					/>
				</div>

				<div className="pb-20 pl-20 pr-20">
					<Button variant="contained" color="secondary" className="w-full" endIcon={<SendIcon />}>
						SEND INVOICE
					</Button>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default InvoiceAppSidebarContent;
