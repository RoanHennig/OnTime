import React from 'react';
import {Avatar, Typography, Checkbox, ListItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import * as Actions from '../store/actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles(theme => ({
    appointmentItem: {
        borderBottom: '1px solid  ' + theme.palette.divider,

        '&.unread'  : {
            background: 'rgba(0,0,0,0.03)'
        },
        '&.selected': {
            '&::after': {
                content        : '""',
                position       : 'absolute',
                left           : 0,
                display        : 'block',
                height         : '100%',
                width          : 3,
                backgroundColor: theme.palette.primary.main
            }
        }
    },
    avatar  : {
        backgroundColor: theme.palette.primary[500]
    }
}));

const AppointmentListItem = (props) => {

    const classes = useStyles(props);
    const toPath = pathToRegexp.compile(props.match.path);
    const checked = props.selectedAppointmentIds.length > 0 && props.selectedAppointmentIds.find(id => id === props.appointment.id) !== undefined;

    return (
        <ListItem
            dense
            button
            onClick={() => props.history.push(toPath(
                {
                    ...props.match.params,
                    appointmentId: props.appointment.id
                }
            ))}
            className={clsx(classes.appointmentItem, checked && "selected", !props.appointment.read && "unread", "py-16 pl-0 pr-8 sm:pl-8 sm:pr-24")}>

            <Checkbox
                tabIndex={-1}
                disableRipple
            />

            <div className="flex flex-1 flex-col relative overflow-hidden">

                <div className="flex items-center justify-between px-16 pb-8">
                    <Typography variant="subtitle1">{props.appointment.time}</Typography>
                </div>

                <div className="flex flex-col px-16 py-0">
                    <Typography className="truncate">{props.appointment.summary}</Typography>
                </div>

{/*                 <div className="flex justify-end">
                    {labels && props.mail.labels.map(label => (
                        <MailChip className="mr-4" title={_.find(labels, {id: label}).title} color={_.find(labels, {id: label}).color} key={label}/>
                    ))}
                </div> */}
            </div>
        </ListItem>
    );
};

const mapStateToProps = state => {
    return {
        selectedAppointmentIds: state.agendaApp.appointments.selectedAppointmentIds
    };
}

export default withRouter(connect(mapStateToProps, null)(AppointmentListItem));