import React from 'react';
import ReactExport from 'react-export-excel';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function ExcelExport(props) {
	props.setDownloadExcel(false);
	return (
		<ExcelFile hideElement={true}>
			<ExcelSheet data={props.data} name="Employees">
				<ExcelColumn label="Id" value="id" />
				<ExcelColumn label="Client Name" value="fullName" />
				<ExcelColumn label="Mobile Number" value="mobileNumber" />
				<ExcelColumn label="Email Address" value="email" />
				<ExcelColumn label="Appointments" value="appointmentsTotal" />
				<ExcelColumn label="Last Appointment" value="lastAppointment" />
			</ExcelSheet>
		</ExcelFile>
	);
}
