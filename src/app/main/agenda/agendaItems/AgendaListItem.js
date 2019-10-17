import React from 'react';
import {Avatar, Typography, Checkbox, ListItem, Chip} from '@material-ui/core';
import {makeStyles} from '@material-ui/styles';
import {withRouter} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import clsx from 'clsx';
import _ from '@lodash';
import * as Actions from '../store/actions/index';
import AgendaItemChip from '../AgendaItemChip';
import TimerIcon from '@material-ui/icons/Timer';

const pathToRegexp = require('path-to-regexp');

const useStyles = makeStyles(theme => ({
    agendaListItem: {
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
    }
}));

const AgendaListItem = (props) => {

    const dispatch = useDispatch();
    const classes = useStyles(props);

    const selectedAgendaItemIds = useSelector(({agendaApp}) => agendaApp.agendaItems.selectedAgendaItemIds);
    const toPath = pathToRegexp.compile(props.match.path);
    const checked = selectedAgendaItemIds.length > 0 && selectedAgendaItemIds.find(id => id === props.item.id) !== undefined;

    return (
        <ListItem
            key={props.item.id}
            dense
            button
            onClick={() => props.history.push(toPath(
                {
                    ...props.match.params,
                    appointmentId: props.item.id
                }
            ))}
            className={clsx(classes.agendaListItem, checked && "selected", !props.item.read && "unread", "py-16 pl-0 pr-8 sm:pl-8 sm:pr-24")}>

            <Checkbox
                tabIndex={-1}
                disableRipple
                checked={checked}
                onChange={() => dispatch(Actions.toggleInSelectedAgendaItems(props.item.id))}
                onClick={(ev) => ev.stopPropagation()}
            />

            <div className="flex flex-1 flex-col relative overflow-hidden">

                <div className="flex items-center justify-between px-16 pb-8">
                <Chip
                    icon={props.itemType == 'appointments' ? <TimerIcon /> : null}
                    label={props.item.title}
                    clickable
                    color="secondary"
                    size="small"
                />
                </div>

                <div className="flex flex-col px-16 py-0">
                    <Typography className="truncate">{props.item.summary}</Typography>
                </div>

                <div className="flex justify-end">
                    {props.item.labels.map(label => (
                        <AgendaItemChip className="mr-4" title={label.title} key={label.id}/>
                    ))}
                </div>
            </div>
        </ListItem>
    );
};

export default withRouter(AgendaListItem);