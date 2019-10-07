import React,{ useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import Form, {Item, RequiredRule } from 'devextreme-react/form';
import {makeStyles} from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';

export default function ShiftDialog(props) {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
            float:'right'
        },
        deleteButton: {
            margin: 'auto'
        },
        dialogAction: {
            display: 'block'
        },
        form:{
            marginBottom: theme.spacing(1),
        },
        addShiftButton: {
            float: 'left',
            marginBottom: theme.spacing(1),
            marginLeft: theme.spacing(1),
          }
    }))

    const handleClose = () => {
        props.setClose(false);
    };

    const handleAddShiftClick = () => {
        props.setShiftDayOfWeek([...props.shiftDayOfWeek, {shiftStart:'00:00', shiftEnd:'00:00'}]);
    };

    const classes = useStyles();

        return (
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Shift Period</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Customize your working hours to suit your business.
                </DialogContentText>
                {props.shiftDayOfWeek.map(shift => (
                    <div>
                    <Form
                        id={'form'}
                        className={classes.form}
                        formData={shift}
                        readOnly={false}
                        showColonAfterLabel={true}
                        labelLocation={'top'}
                        showRequiredMark={false}
                        colCount={2}
                        showValidationSummary={true}
                        validationGroup={'businessOperatingHours'}
                        stylingMode={'outlined'}
                    >
                        <Item dataField={'shiftStart'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers'}} >
                            <RequiredRule message={'Please select a starting time for your shift'} />
                        </Item>
                        <Item dataField={'shiftEnd'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers' }}>
                            <RequiredRule message={'Please select an ending time for your shift'} />
                        </Item>
                    </Form>
                    <IconButton aria-label="delete" onClick={() => props.handleDeleteShift(shift)} className={classes.deleteButton}>
                        <DeleteIcon />
                    </IconButton>
                    </div>
                ))} 
                <Button 
                className={classes.addShiftButton}
                hidden={props.shiftDayOfWeek.length == 2}
                variant="outlined"
                color="primary"
                onClick={handleAddShiftClick}
                startIcon={<AddIcon />} >
                    Add Shift
                </Button>
                </DialogContent>
                <DialogActions className={classes.dialogAction} disableSpacing={true}>
                <Button variant="contained" color="primary" onClick={() => props.handleSaveShift()} className={classes.button} startIcon={<SaveIcon />}>
                    Save
                </Button>
                </DialogActions>
            </Dialog>
        );
}