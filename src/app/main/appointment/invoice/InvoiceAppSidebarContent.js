import React from 'react';
import { List, ListItem, ListItemText, Button, Badge } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import { FuseAnimate, NavLinkAdapter } from '@fuse';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import EventSharpIcon from '@material-ui/icons/EventSharp';

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
