import React, { useEffect, useState } from 'react';
import Query from 'devextreme/data/query';
import { makeStyles } from '@material-ui/styles';
import {Checkbox, Icon, IconButton, Tooltip, MenuItem} from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import EventBusyIcon from '@material-ui/icons/EventBusy';
import AgendaItemChip from '../../agenda/AgendaItemChip';

const useStyles = makeStyles(theme => ({
    tooltip: {
        marginLeft: '10px',
        verticalAlign: 'top',
        textAlign: 'left'
    },
    text:
    {
        fontSize: '1.5em',
        lineHeight: '40px'
    }
}));

function AppointmentTooltipTemplate(props) {
    const classes = useStyles();

    return (
        <div className={"h-80 mb-10"}>
            <div className={classes.tooltip}>
                <div className={classes.text}>
                    {props.data.text}
                </div>
                <div>
                    {props.data.startDate.toLocaleTimeString()} - {props.data.endDate.toLocaleTimeString()}
                </div>
                <div className="flex justify-between w-full">
                <div className="flex items-center">
                <Tooltip title="Cancel Appointment" placement="right">
                        <IconButton
                            aria-label="Cancel Appointment"
                        >
                            <EventBusyIcon />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Reschedule" placement="right">
                        <IconButton
                            aria-label="Reschedule"
                        >
                            <RestoreIcon />
                        </IconButton>
                    </Tooltip>
                </div>

                    <div className="flex items-center">
                    <AgendaItemChip className="mr-4 float-right" title="red" key={1}/>
                    <AgendaItemChip className="mr-4 float-right" title="long-hair" key={2}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AppointmentTooltipTemplate;
