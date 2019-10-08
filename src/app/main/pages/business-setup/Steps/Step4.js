import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as BusinessSetupActions from '../store/actions';
import ShiftButtonCell from './Utils/ShiftButtonCell'
import service from './Step4.data.js';
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
import validationEngine from 'devextreme/ui/validation_engine';

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

function Step4(props) {

    const handleClick = (row, day, dayOfWeek) => {
        setShiftRow(row);
        setShiftDay(day);
        setShiftDayOfWeek(dayOfWeek);
        setIsOpen(true);
    };

    const handleSaveShift = (shifts) => {
        setIsOpen(false);
        const newDataSource = [...dataSource];
        const index = newDataSource.indexOf(shiftRow);

        switch (shiftDay) {
            case 'sunday':
                {
                    newDataSource[index].sunday = shifts;
                    setDataSource(newDataSource);
                }
                break;
            case 'monday':
                {
                    newDataSource[index].monday = shifts;
                    setDataSource(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    newDataSource[index].tuesday = shifts;
                    setDataSource(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    newDataSource[index].wednesday = shifts;
                    setDataSource(newDataSource);
                }
                break;
            case 'thursday':
                {
                    newDataSource[index].thursday = shifts;
                    setDataSource(newDataSource);
                }
                break;
            case 'friday':
                {
                    newDataSource[index].friday = shifts;
                    setDataSource(newDataSource);
                }
                break;
            case 'saturday':
                {
                    newDataSource[index].saturday = shifts;
                    setDataSource(newDataSource);
                }
                break;

        }
    };

    const handleDeleteWholeShift = () => {
        const newDataSource = [...dataSource];
        const index = newDataSource.indexOf(shiftRow);
        setIsOpen(false);
        switch (shiftDay) {
            case 'sunday':
                {
                    newDataSource[index].sunday = [];
                    setDataSource(newDataSource);
                }
                break;
            case 'monday':
                {
                    newDataSource[index].monday = [];
                    setDataSource(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    newDataSource[index].tuesday = [];
                    setDataSource(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    newDataSource[index].wednesday = [];
                    setDataSource(newDataSource);
                }
                break;
            case 'thursday':
                {
                    newDataSource[index].thursday = [];
                    setDataSource(newDataSource);
                }
                break;
            case 'friday':
                {
                    newDataSource[index].friday = [];
                    setDataSource(newDataSource);
                }
                break;
            case 'saturday':
                {
                    newDataSource[index].saturday = [];
                    setDataSource(newDataSource);
                }
                break;
        }
    };

    const handleAddStaffClick = () => {
        const newItem = { ...dataSource[0] };
        newItem.staffID = dataSource.length + 1;
        newItem.staffName = 'Staff Member';
        setDataSource(dataSource.concat(newItem));
    };

    const onFieldChanged = (e) => {
        //setBusinessoperatingHours(operatingHours);
        validationEngine.validateGroup('businessOperatingHours')
    }

    const handleDeleteStaffMember = (row) => {
        const newDataSource = [...dataSource];
        const index = newDataSource.indexOf(row);
        newDataSource.splice(index, 1);
        setDataSource(newDataSource);
    };

    const [isOpen, setIsOpen] = useState(null);
    const [shiftRow, setShiftRow] = useState(null);
    const [shiftDay, setShiftDay] = useState(null);
    const [businessOperatingHours] = useState({openingTime: '08:00', closingTime: '17:00'});
    const [shiftDayOfWeek, setShiftDayOfWeek] = useState([]);
    const [dataSource, setDataSource] = useState(service.createDataSet());

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <ShiftDialog open={isOpen} setClose={setIsOpen} handleDeleteWholeShift={handleDeleteWholeShift} setShiftDayOfWeek={setShiftDayOfWeek}
                shiftDayOfWeek={shiftDayOfWeek} handleSaveShift={handleSaveShift} businessOperatingHours={businessOperatingHours} />
            <Form
                id={'form'}
                formData={businessOperatingHours}
                readOnly={false}
                showColonAfterLabel={true}
                labelLocation={'top'}
                showRequiredMark={false}
                colCount={2}
                showValidationSummary={true}
                validationGroup={'businessOperatingHours'}
                stylingMode={'outlined'}                
                onFieldDataChanged = {onFieldChanged}
            >
                <SimpleItem dataField={'openingTime'} editorType={'dxDateBox'} editorOptions={{ defaultValue: '08:00', type: 'time', pickerType: 'rollers', min: '00:00' }} >
                    <RequiredRule message={'Please select an opening time for your business'} />
                </SimpleItem>
                <SimpleItem dataField={'closingTime'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers', min: '08:00' }}>
                    <RequiredRule message={'Please select a closing time for your business'} />
                </SimpleItem>
            </Form>
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
                    {dataSource.map(row => (
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
    )
}

const mapStateToProps = state => {
    return {
        stepDetails: state.businessSetupSteps.Step4
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setEnableNext: BusinessSetupActions.setEnableNext,
        setDisableNext: BusinessSetupActions.setDisableNext,
    },
        dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Step4));