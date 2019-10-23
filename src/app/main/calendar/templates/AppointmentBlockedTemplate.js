import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import { darken } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
    root: {
        
        background: 'linear-gradient(to right, ' + '#607d8b' + ' 0%, ' + darken('#607d8b', 0.5) + ' 100%)',
        color: theme.palette.primary.contrastText
    }
}));

export default function AppointmentBlockedTemplate(data) {
    const classes = useStyles();
    return (
        <div className={" flex flex-col h-full align-middle flex-auto flex-shrink-0 items-center justify-center"}>
            <Typography color="inherit" className="text-20 sm:text-32 font-light">
                Lunch Break
            </Typography>
        </div>
    );
}
