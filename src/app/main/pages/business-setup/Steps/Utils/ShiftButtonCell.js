import React,{ useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ShiftDialog from './ShiftDialog';
import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    button: {
        marginBottom: theme.spacing(1),
        minWidth: 120
      }
}));

function ShiftButtonCell(props) {

    const classes = useStyles();
  return (
      <div>       
        <Button 
            className ={classes.button}
            variant="contained"
            color="primary" 
            onClick= {props.click}
            startIcon = {props.startIcon ? props.startIcon : null}>
            {props.shift}
        </Button>
      </div>

  );
}

export default ShiftButtonCell;