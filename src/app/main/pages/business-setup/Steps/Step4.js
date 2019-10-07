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
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
    },
    tableCell: {
        maxWidth: 250
    },
    table: {
        marginBottom: theme.spacing(2),
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

    const handleClick = (row, day, period, dayOfWeek) => {
        setShiftRow(row);
        setShiftDay(day);
        setShiftDayOfWeek(dayOfWeek);
        setIsOpen(true);
    };

    const handleSaveShift = () => {
        setIsOpen(false);
        const newDataSource = [...dataSource];
        const index = newDataSource.indexOf(shiftRow);

        switch (shiftDay) {
            case 'sunday':
                {
                    newDataSource[index].sunday = shiftDayOfWeek;
                    setDataSource(newDataSource);
                }
                break;
            case 'monday':
                {
                    newDataSource[index].monday = shiftDayOfWeek;
                    setDataSource(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    newDataSource[index].tuesday = shiftDayOfWeek;
                    setDataSource(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    newDataSource[index].wednesday = shiftDayOfWeek;
                    setDataSource(newDataSource);
                }
                break;
            case 'thursday':
                {
                    newDataSource[index].thursday = shiftDayOfWeek;
                    setDataSource(newDataSource);
                }
                break;
            case 'friday':
                {
                    newDataSource[index].friday = shiftDayOfWeek;
                    setDataSource(newDataSource);
                }
                break;
            case 'saturday':
                {
                    newDataSource[index].saturday = shiftDayOfWeek;
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
                    newDataSource[index].sunday = null;
                    setDataSource(newDataSource);
                }
                break;
            case 'monday':
                {
                    newDataSource[index].monday = null;
                    setDataSource(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    newDataSource[index].tuesday = null;
                    setDataSource(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    newDataSource[index].wednesday = null;
                    setDataSource(newDataSource);
                }
                break;
            case 'thursday':
                {
                    newDataSource[index].thursday = null;
                    setDataSource(newDataSource);
                }
                break;
            case 'friday':
                {
                    newDataSource[index].friday = null;
                    setDataSource(newDataSource);
                }
                break;
            case 'saturday':
                {
                    newDataSource[index].saturday = null;
                    setDataSource(newDataSource);
                }
                break;
        }
    };

    const handleDeleteShift = (shift) => {
        const newDataSource = [...dataSource];
        const index = newDataSource.indexOf(shiftRow);

        switch (shiftDay) {
            case 'sunday':
                {
                    const newShift = [...newDataSource[index].sunday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].sunday.splice(shiftIndex, 1);
                    setDataSource(newDataSource);
                }
                break;
            case 'monday':
                {
                    const newShift = [...newDataSource[index].monday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].monday.splice(shiftIndex, 1);
                    setDataSource(newDataSource);
                }
                break;
            case 'tuesday':
                {
                    const newShift = [...newDataSource[index].tuesday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].tuesday.splice(shiftIndex, 1);
                    setDataSource(newDataSource);
                }
                break;
            case 'wednesday':
                {
                    const newShift = [...newDataSource[index].wednesday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].wednesday.splice(shiftIndex, 1);
                    setDataSource(newDataSource);
                }
                break;
            case 'thursday':
                {
                    const newShift = [...newDataSource[index].thursday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].thursday.splice(shiftIndex, 1);
                    setDataSource(newDataSource);
                }
                break;
            case 'friday':
                {
                    const newShift = [...newDataSource[index].friday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].friday.splice(shiftIndex, 1);
                    setDataSource(newDataSource);
                }
                break;
            case 'saturday':
                {
                    const newShift = [...newDataSource[index].saturday];
                    const shiftIndex = newShift.indexOf(shift);
                    newDataSource[index].saturday.splice(shiftIndex, 1);
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

    const handleDeleteStaffMember = (row) => {
        const newDataSource = [...dataSource];
        const index = newDataSource.indexOf(row);
        newDataSource.splice(index, 1);
        setDataSource(newDataSource);
    };

    const [isOpen, setIsOpen] = useState(null);
    const [shiftRow, setShiftRow] = useState(null);
    const [shiftDay, setShiftDay] = useState(null);
    const [shiftDayOfWeek, setShiftDayOfWeek] = useState([]);
    const [dataSource, setDataSource] = useState(service.createDataSet());

    const classes = useStyles();

    return (
        <Paper className={classes.root}>
            <ShiftDialog open={isOpen} setClose={setIsOpen} handleDeleteWholeShift={handleDeleteWholeShift} setShiftDayOfWeek={setShiftDayOfWeek} shiftDayOfWeek={shiftDayOfWeek} handleSaveShift={handleSaveShift} handleDeleteShift={handleDeleteShift} />
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
                            <TableCell component="th" scope="row">
                                <TextField
                                    defaultValue={row.staffName}
                                    margin="normal"
                                    inputProps={{ 'aria-label': 'name' }}
                                />
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.sunday ? row.sunday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'sunday', shift, row.sunday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.monday ? row.monday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'monday', shift, row.monday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.tuesday ? row.tuesday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'tuesday', shift, row.tuesday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.wednesday ? row.wednesday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'wednesday', shift, row.wednesday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.thursday ? row.thursday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'thursday', shift, row.thursday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.friday ? row.friday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'friday', shift, row.friday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                                {row.saturday ? row.saturday.map(shift => (
                                    <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(row, 'saturday', shift, row.saturday)} />
                                )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick} />}
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