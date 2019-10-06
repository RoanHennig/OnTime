import React,{ useState, useEffect }  from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as BusinessSetupActions from '../store/actions';
import ShiftButtonCell from './Utils/ShiftButtonCell'
import MaterialButton from '@material-ui/core/Button';
import service from './Step4.data.js';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import ShiftDialog from './Utils/ShiftDialog';
import {makeStyles} from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';

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
      },
    cellButton: {
        marginBottom: theme.spacing(1),
      }
}));


function Step4(props){

    const handleClick = () => {
        setIsOpen(true);
      };
    
    const [isOpen, setIsOpen] = useState(null);
    const [dataSource, setDataSource] = useState(service.createDataSet());

    const classes = useStyles();

        return (      
            <Paper className={classes.root}>
                <ShiftDialog open={isOpen} setClose={setIsOpen}/>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
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
                        <TableRow  key={row.staffName}>
                            <TableCell component="th" scope="row">
                                    {row.staffName}
                            </TableCell>
                            <TableCell className={classes.tableCell} align="right">
                            {row.sunday.map(shift => (           
                                <ShiftButtonCell shift={shift} click={handleClick}/>         
                            ))} 
                            </TableCell>                
                            <TableCell className={classes.tableCell} align="right">
                            {row.monday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>              
                            ))} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.tuesday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                
                            ))} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.wednesday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                 
                            ))} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.thursday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                 
                            ))} 
                            </TableCell>  
                            <TableCell className={classes.tableCell} align="right">
                            {row.friday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            ))} 
                            </TableCell> 
                            <TableCell className={classes.tableCell} align="right">
                            {row.saturday.map(shift => (                       
                                <ShiftButtonCell shift={shift} click={handleClick}/>                  
                            ))} 
                            </TableCell> 
                        </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <MaterialButton 
                className={classes.addStaffButton}
                variant="outlined"
                color="primary"
                startIcon={<DeleteIcon />} >
                    Add Staff
                </MaterialButton>
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