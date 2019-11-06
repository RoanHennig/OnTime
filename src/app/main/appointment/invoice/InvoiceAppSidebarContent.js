import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';

function InvoiceAppSidebarContent(props) {
	const dispatch = useDispatch();

	const [ email, setEmail ] = useState(props.client.email);

	const handleEmailChange = (ev) => {
		setEmail(ev.target.value);
	};

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
						value={email}
						onChange={handleEmailChange}
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
