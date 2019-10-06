import React from 'react';
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


export default function ShiftDialog(props) {

    const useStyles = makeStyles(theme => ({
        button: {
            margin: theme.spacing(1),
            float:'right'
        },
        deleteButton: {
            float: 'left',
            margin: theme.spacing(1),
        }
    }))

    const handleClose = () => {
        props.setClose(false);
    };

    const classes = useStyles();

        return (
            <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
                <DialogContent>
                <DialogContentText>
                    Customize your working hours to suit your business.
                </DialogContentText>
                            <Form
                            id={'form'}                
                            formData={[]}
                            readOnly={false}
                            showColonAfterLabel={true}
                            labelLocation={'top'}
                            colCount={2}
                            showValidationSummary={true}
                            validationGroup={'businessOperatingHours'}
                            stylingMode= {'outlined'}
                            >
                                <Item dataField={'ShiftStart'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers' }} >
                                    <RequiredRule message={'Please select a starting time for your shift'} />
                                </Item>
                                <Item dataField={'ShiftEnd'} editorType={'dxDateBox'} editorOptions={{ type: 'time', pickerType: 'rollers' }}>
                                    <RequiredRule message={'Please select an ending time for your shift'}  />
                                </Item>           
                        </Form>
                </DialogContent>
                <DialogActions disableSpacing={true}>
                <Button
                    variant="contained"
                    color="secondary"
                    className={classes.deleteButton}
                    startIcon={<DeleteIcon />}
                    >
                    Delete
                </Button>
                <Button variant="contained" color="primary" className={classes.button} startIcon={<SaveIcon />}>
                    Save
                </Button>
                </DialogActions>
            </Dialog>
        );
}