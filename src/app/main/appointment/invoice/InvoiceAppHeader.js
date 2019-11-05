import React from 'react';
import { Icon } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function InvoiceAppHeader(props) {
	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex flex-1 flex-col items-center sm:items-start">
				<FuseAnimate animation="transition.slideRightIn" delay={300}>
					<Typography
						className="normal-case flex items-center sm:mb-12"
						role="button"
						onClick={() => props.goBack()}
						color="inherit"
					>
						<Icon className="mr-4 text-20">arrow_back</Icon>
						Back
					</Typography>
				</FuseAnimate>

				<div className="flex flex-col min-w-0 items-center sm:items-start">
					<FuseAnimate animation="transition.slideLeftIn" delay={300}>
						<Typography className="text-16 sm:text-20 truncate">
							{'Invoice - ' + props.invoiceNumber}
						</Typography>
					</FuseAnimate>
				</div>
			</div>
		</div>
	);
}

export default InvoiceAppHeader;
