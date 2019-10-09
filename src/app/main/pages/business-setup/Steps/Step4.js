import React, { useState } from 'react';
import {connect, useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { FuseAnimate, FuseScrollbars } from '@fuse';
import * as Actions from './store/actions';
import ShiftButtonCell from './Utils/ShiftButtonCell'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ShiftDialog from './Utils/ShiftDialog';
import { makeStyles } from '@material-ui/styles';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import Form, { SimpleItem, RequiredRule} from 'devextreme-react/form';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    tableCell: {
        maxWidth: 250
    },
    tableCellStaffName: {
        minWidth: 150
    },
    table: {
        marginBottom: theme.spacing(2),
        minWidth: 650
    },
    addStaffButton: {
        float: 'left',
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
    },
    cellButton: {
        marginBottom: theme.spacing(1),
    }
}));

function Step4({setOperatingHours, setBusinessOperatingHours}) {

    const stepDetails = useSelector(state => state.businessSetupSteps.Step4);

    const handleClick = (row, day, dayOfWeek) => {
        setShiftRow(row);
        setShiftDay(day);
        setShiftDayOfWeek(dayOfWeek);
        setIsOpen(true);
    };

    const handleSaveShift = (shifts) => {
        setIsOpen(false);
        const newDataSource = [...stepDetails.staffOperatingHours];
        const index = newDataSource.indexOf(shiftRow);

        switch (shiftDay) {
            case 'sunday':
                {
                    newDataSource[index].sunday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;
            case 'monday':
                {
                    newDataSource[index].monday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    newDataSource[index].tuesday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    newDataSource[index].wednesday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;
            case 'thursday':
                {
                    newDataSource[index].thursday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;
            case 'friday':
                {
                    newDataSource[index].friday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;
            case 'saturday':
                {
                    newDataSource[index].saturday = shifts;
                    setOperatingHours(newDataSource);
                }
                break;

        }
    };

    const handleDeleteWholeShift = () => {
        const newDataSource = [...stepDetails.staffOperatingHours];
        const index = newDataSource.indexOf(shiftRow);
        setIsOpen(false);
        switch (shiftDay) {
            case 'sunday':
                {
                    newDataSource[index].sunday = [];
                    setOperatingHours(newDataSource);
                }
                break;
            case 'monday':
                {
                    newDataSource[index].monday = [];
                    setOperatingHours(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    newDataSource[index].tuesday = [];
                    setOperatingHours(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    newDataSource[index].wednesday = [];
                    setOperatingHours(newDataSource);
                }
                break;
            case 'thursday':
                {
                    newDataSource[index].thursday = [];
                    setOperatingHours(newDataSource);
                }
                break;
            case 'friday':
                {
                    newDataSource[index].friday = [];
                    setOperatingHours(newDataSource);
                }
                break;
            case 'saturday':
                {
                    newDataSource[index].saturday = [];
                    setOperatingHours(newDataSource);
                }
                break;
        }
    };

    const handleAddStaffClick = () => {
        const newStaffOperatingHours = [...stepDetails.staffOperatingHours]
        const newItem = { ...newStaffOperatingHours[0] };
        newItem.staffID = newStaffOperatingHours.length + 1;
        newItem.staffName = 'Staff Member';
        setOperatingHours(newStaffOperatingHours.concat(newItem));
    };

    const onBusinessOperatingOpeningHoursChanged = (e) => {
        const newBusinessOperatingHours = {...stepDetails.businessOperatingHours};
        newBusinessOperatingHours.openingTime = e.value;

        setBusinessOperatingHours(newBusinessOperatingHours);  
    };

    const onBusinessOperatingClosingHoursChanged = (e) => {
        const newBusinessOperatingHours = {...stepDetails.businessOperatingHours};

        newBusinessOperatingHours.closingTime = e.value;
        setBusinessOperatingHours(newBusinessOperatingHours);  
    };

    const handleDeleteStaffMember = (row) => {
        const newDataSource = [...stepDetails.staffOperatingHours];
        const index = newDataSource.indexOf(row);
        newDataSource.splice(index, 1);
        
        setOperatingHours(newDataSource);
    };

    const handleStaffNameChange = (event,row) => {
        const newDataSource = [...stepDetails.staffOperatingHours];
        const index = newDataSource.indexOf(row);
        newDataSource[index].staffName = event.target.value;
        
        setOperatingHours(newDataSource);
    };

    const [isOpen, setIsOpen] = useState(null);
    const [shiftRow, setShiftRow] = useState(null);
    const [shiftDay, setShiftDay] = useState(null);
    const [shiftDayOfWeek, setShiftDayOfWeek] = useState([]);

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.root}>
            <Form
                id={'form'}
                formData={stepDetails.businessOperatingHours}
                readOnly={false}
                showColonAfterLabel={true}
                labelLocation={'top'}
                showRequiredMark={false}
                colCount={2}
                showValidationSummary={true}
                validationGroup={'businessOperatingHours'}
                stylingMode={'outlined'}                
            >
                <SimpleItem dataField={'openingTime'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers', min: '00:00',max: stepDetails.businessOperatingHours.closingTime, onValueChanged:onBusinessOperatingOpeningHoursChanged }} >
                    <RequiredRule message={'Please select an opening time for your business'} />
                </SimpleItem>
                <SimpleItem dataField={'closingTime'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers', min: stepDetails.businessOperatingHours.openingTime , onValueChanged:onBusinessOperatingClosingHoursChanged }}>
                    <RequiredRule message={'Please select a closing time for your business'} />
                </SimpleItem>
            </Form>
            </Paper>
            <Paper className={classes.root}>
            <ShiftDialog open={isOpen} setClose={setIsOpen} handleDeleteWholeShift={handleDeleteWholeShift} setShiftDayOfWeek={setShiftDayOfWeek}
                shiftDayOfWeek={shiftDayOfWeek} handleSaveShift={handleSaveShift} businessOperatingHours={stepDetails.businessOperatingHours} />

            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Staff Member</TableCell>
                        <TableCell className={classes.tableCell} align="center">Sunday</TableCell>
                        <TableCell className={classes.tableCell} align="center">Monday</TableCell>
                        <TableCell className={classes.tableCell} align="center">Tuesday</TableCell>
                        <TableCell className={classes.tableCell} align="center">Wednesday</TableCell>
                        <TableCell className={classes.tableCell} align="center">Thursday</TableCell>
                        <TableCell className={classes.tableCell} align="center">Friday</TableCell>
                        <TableCell className={classes.tableCell} align="center">Saturday</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {stepDetails.staffOperatingHours.map(row => (
                        <FuseAnimate animation="transition.slideDownBigIn">
                        <TableRow key={row.staffID}>
                            <TableCell scope="row">
                                <IconButton aria-label="delete" onClick={() => handleDeleteStaffMember(row)} className={classes.margin}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                            <TableCell className={classes.tableCellStaffName} component="th" scope="row">
                                <TextField
                                    defaultValue={row.staffName}
                                    margin="normal"
                                    onChange={(event) => handleStaffNameChange(event,row)}
                                    inputProps={{ 'aria-label': 'name' }}
                                />
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.sunday.length > 0 ? row.sunday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'sunday', row.sunday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.monday.length > 0 ? row.monday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'monday', row.monday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.tuesday.length > 0 ? row.tuesday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'tuesday', row.tuesday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.wednesday.length > 0 ? row.wednesday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'wednesday', row.wednesday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.thursday.length > 0 ? row.thursday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'thursday', row.thursday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.friday.length > 0 ? row.friday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'friday', row.friday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.saturday.length > 0 ? row.saturday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'saturday', row.saturday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={() => handleClick(row, 'sunday', row.sunday)} />}
                            </TableCell>
                        </TableRow>
                        </FuseAnimate>

                    ))}
                </TableBody>
            </Table>
            <Button
                className={classes.addStaffButton}
                variant="outlined"
                color="primary"
                onClick={handleAddStaffClick}
                startIcon={<AddIcon />} >
                Add Staff
                </Button>
        </Paper>
        </div>
        
    )
}

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
        setOperatingHours           : Actions.setOperatingHours,
        setBusinessOperatingHours           : Actions.setBusinessOperatingHours
    },
    dispatch);
}

export default (connect(null, mapDispatchToProps)(Step4));