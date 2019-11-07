import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import SendIcon from '@material-ui/icons/Send';
import { useDispatch } from 'react-redux';

function InvoiceAppSidebarContent(props) {
	const dispatch = useDispatch();

	const [ email, setEmail ] = useState(props.client.email);
	const [ sendButtonDisabled, setSendButtonDisabled ] = useState(true);

	const handleEmailChange = (ev) => {
		setEmail(ev.target.value);
		validateEmail(ev.target.value);
	};

	useEffect(
		() => {
			validateEmail(email);
		},
		[ email, validateEmail ]
	);

	function validateEmail(emailAddress) {
		const emailValid = emailAddress.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
		if (emailValid) {
			setSendButtonDisabled(false);
		} else {
			setSendButtonDisabled(true);
		}
	}

	return (
		<FuseAnimate animation="transition.slideUpIn" delay={200}>
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
					<Button
						variant="contained"
						color="secondary"
						className="w-full"
						endIcon={<SendIcon />}
						disabled={sendButtonDisabled}
					>
						SEND INVOICE
					</Button>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default InvoiceAppSidebarContent;
