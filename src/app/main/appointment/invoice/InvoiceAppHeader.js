import React from 'react';
import { Hidden, Icon, IconButton } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import Typography from '@material-ui/core/Typography';

function InvoiceAppHeader(props) {
	return (
		<div className="flex flex-1 w-full items-center justify-between">
			<div className="flex flex-1 flex-col items-center sm:items-start">
				<div className="flex flex-shrink items-center sm:w-288">
					<Hidden lgUp>
						<IconButton
							onClick={(ev) => props.pageLayout.current.toggleLeftSidebar()}
							aria-label="open left sidebar"
							className="mr-40 float-left"
						>
							<Icon className="text-32">menu</Icon>
						</IconButton>
					</Hidden>
					<div className="flex items-center">
						<FuseAnimate animation="transition.slideRightIn" delay={200}>
							<Typography
								className="normal-case text-20 flex items-center sm:mb-12"
								role="button"
								onClick={() => props.goBack()}
								color="inherit"
							>
								<Icon className="mr-4 text-32">arrow_back</Icon>
								Back
							</Typography>
						</FuseAnimate>
					</div>
				</div>

				<div className="flex flex-col min-w-0 items-center sm:items-start hidden sm:flex">
					<FuseAnimate animation="transition.slideLeftIn" delay={200}>
						<Typography className="text-16 sm:text-20 truncate">{'INV ' + props.invoiceNumber}</Typography>
					</FuseAnimate>
				</div>
			</div>
		</div>
	);
}

export default InvoiceAppHeader;
