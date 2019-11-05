import React from 'react';
import { Button } from '@material-ui/core';
import { FuseAnimate } from '@fuse';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';

function InvoiceAppSidebarContent() {
	return (
		<FuseAnimate animation="transition.slideUpIn" delay={400}>
			<div className="flex-auto border-l-1">
				<div className="p-20">
					<Button variant="outlined" className="w-full" startIcon={<MonetizationOnSharpIcon />}>
						PROCESS SALE
					</Button>
				</div>

				<div className="p-20">
					<Button variant="outlined" className="w-full" startIcon={<GroupAddSharpIcon />}>
						REGISTER CLIENT
					</Button>
				</div>

				<div className="p-20">
					<Button variant="outlined" className="w-full" startIcon={<DateRangeSharpIcon />}>
						+ APPOINTMENT
					</Button>
				</div>

				<div className="p-20">
					<Button variant="outlined" className="w-full" startIcon={<BlockSharpIcon />}>
						BLOCK TIME SLOT
					</Button>
				</div>
			</div>
		</FuseAnimate>
	);
}

export default InvoiceAppSidebarContent;
