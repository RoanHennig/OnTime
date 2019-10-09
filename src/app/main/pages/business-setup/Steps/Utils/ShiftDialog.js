import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import Form, { SimpleItem, RequiredRule} from 'devextreme-react/form';
import { makeStyles } from '@material-ui/styles';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import validationEngine from 'devextreme/ui/validation_engine';

export default function ShiftDialog(props) {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
            float: 'right'
        },
        deleteButton: {
            margin: theme.spacing(2),
            float: 'left'
        },
        dialogAction: {
            display: 'block'
        },
        form: {
            marginBottom: theme.spacing(1),
        },
        addShiftButton: {
            float: 'left'
        }
    }))

    const handleClose = () => {
        props.setClose(false);
        setData([...props.shiftDayOfWeek]);
    };

    useEffect(() => {
        setData([...props.shiftDayOfWeek]);
    }, [props.shiftDayOfWeek]);

    const handleDeleteShift = (shift) => {
        const newShift = [...shiftData];
        const index = newShift.indexOf(shift);
        newShift.splice(index, 1);
        setData(newShift);
    };

    const handleAddShiftClick = () => {
        setData([...props.shiftDayOfWeek, { shiftStart: '00:00', shiftEnd: '00:00' }]);
    };

    const onFieldChanged = (e) => {
        validationEngine.validateGroup('staffOperatingHours')
    }

    const [shiftData, setData] = useState([]);
    const classes = useStyles();

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Edit Shift</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Customize your working hours to suit your business.
                </DialogContentText>
                {shiftData.map(shift => (
                    <div>
                        <Form
                            id={'form'}
                            className={classes.form}
                            formData={shift}
                            readOnly={false}
                            showColonAfterLabel={true}
                            labelLocation={'top'}
                            showRequiredMark={false}
                            colCount={10}
                            showValidationSummary={true}
                            validationGroup={'staffOperatingHours'}
                            stylingMode={'outlined'}
                            onFieldDataChanged = {onFieldChanged}
                        >
                            <SimpleItem colSpan={4}  dataField={'shiftStart'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers', min: props.businessOperatingHours.openingTime }} >
                                <RequiredRule message={'Please select a starting time for your shift'} />
                            </SimpleItem>
                            <SimpleItem colSpan={4}  dataField={'shiftEnd'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers', min: shift.shiftStart, max:props.businessOperatingHours.closingTime }}>
                                <RequiredRule message={'Please select an ending time for your shift'} />
                            </SimpleItem>
                            <SimpleItem dataField={'Remove'} colSpan={2}>
                                <IconButton aria-label="delete" onClick={() => handleDeleteShift(shift)}>
                                    <DeleteIcon />
                                </IconButton>
                            </SimpleItem>

                        </Form>

                    </div>
                ))}
                <Button
                    className={classes.addShiftButton}
                    hidden={shiftData && shiftData.length == 2}
                    variant="outlined"
                    color="primary"
                    onClick={handleAddShiftClick}
                    startIcon={<AddIcon />} >
                    Add Shift
                </Button>
            </DialogContent>

            <DialogActions className={classes.dialogAction} disableSpacing={true}>
            <Button variant="contained" color="secondary" onClick={() => props.handleDeleteWholeShift()} className={classes.deleteButton} startIcon={<DeleteIcon />}>
                    Delete
            </Button>
            <Button variant="contained" color="primary" onClick={() => props.handleSaveShift(shiftData)} className={classes.button} startIcon={<SaveIcon />}>
                    Save
            </Button>
            <Button className={classes.button} onClick={handleClose}>
                Close
            </Button>
            </DialogActions>
        </Dialog>
    );
}