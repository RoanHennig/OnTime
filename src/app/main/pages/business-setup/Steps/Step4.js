import React,{ useState, useEffect }  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
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
import {makeStyles} from '@material-ui/styles';
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
        maxWidth: 250,
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

function Step4(props){

    const handleClick = (period) => {
        setShiftPeriod(period);
        setIsOpen(true);
      };

    const handleSave = (formData) => {
        setShiftPeriod(formData);
        setIsOpen(false);
    };

    const handleAddStaffClick = () => {
        const newItem = {...dataSource[0]};
        newItem.staffID = dataSource.length + 1;
        setDataSource(dataSource.concat(newItem));
    };

    const handleDeleteStaffMember = (row) => {
        const newDataSource = [...dataSource];     
        const index = newDataSource.indexOf(row)  
        newDataSource.splice(index, 1);
        setDataSource(newDataSource);
    };

    const [isOpen, setIsOpen] = useState(null);
    const [shiftPeriod, setShiftPeriod] = useState(null);
    const [dataSource, setDataSource] = useState(service.createDataSet());

    const classes = useStyles();

        return (      
            <Paper className={classes.root}>
                <ShiftDialog open={isOpen} setClose={setIsOpen} shiftPeriod={shiftPeriod} handleSave={handleSave} setShiftPeriod = {setShiftPeriod}/>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                        <TableCell></TableCell>
                        <TableCell>Staff Member</TableCell>
                        <TableCell align="center">Sunday</TableCell>
                        <TableCell align="center">Monday</TableCell>
                        <TableCell align="center">Tuesday</TableCell>
                        <TableCell align="center">Wednesday</TableCell>
                        <TableCell align="center">Thursday</TableCell>
                        <TableCell align="center">Friday</TableCell>
                        <TableCell align="center">Saturday</TableCell>
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
                                <ShiftButtonCell shift={shift.shiftStart + ' - ' + shift.shiftEnd} click={() => handleClick(shift)}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>}  
                            </TableCell>                
                            <TableCell className={classes.tableCell} align="right">
                            {row.monday ? row.monday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>}  
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.tuesday ? row.tuesday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.wednesday ? row.wednesday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.thursday ? row.thursday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.friday ? row.friday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>} 
                            </TableCell> 
                            <TableCell className={classes.tableCell} align="right">
                            {row.saturday ? row.saturday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            )) : <ShiftButtonCell shift={'ADD'} startIcon={<AddIcon />} click={handleClick}/>} 
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

const mapDispatchToProps = dispatch =>
{
    return bindActionCreators({
        setEnableNext               : BusinessSetupActions.setEnableNext,
        setDisableNext              : BusinessSetupActions.setDisableNext,
    },
    dispatch);
}

export default (connect(mapStateToProps, mapDispatchToProps)(Step4));