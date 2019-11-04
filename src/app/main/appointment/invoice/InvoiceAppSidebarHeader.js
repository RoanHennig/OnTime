import React from 'react';
import { FuseAnimate } from '@fuse';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';

function InvoiceAppSidebarHeader() {
	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<FuseAnimate animation="transition.expandIn" delay={300}>
					<CalendarTodaySharpIcon className="mr-16 text-32" />
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={300}>
					<span className="text-24">Today</span>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default InvoiceAppSidebarHeader;
