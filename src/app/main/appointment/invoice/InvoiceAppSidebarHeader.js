import React from 'react';
import { FuseAnimate } from '@fuse';
import ReceiptIcon from '@material-ui/icons/Receipt';

function InvoiceAppSidebarHeader() {
	return (
		<div className="flex flex-col justify-center h-full p-24">
			<div className="flex items-center flex-1">
				<FuseAnimate animation="transition.expandIn" delay={200}>
					<ReceiptIcon className="mr-16 text-32" />
				</FuseAnimate>
				<FuseAnimate animation="transition.slideLeftIn" delay={200}>
					<span className="text-24">Invoice</span>
				</FuseAnimate>
			</div>
		</div>
	);
}

export default InvoiceAppSidebarHeader;
