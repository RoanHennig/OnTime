import React from 'react';
import { Icon, List, ListItem, ListItemText, ListSubheader, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FuseAnimate, NavLinkAdapter } from '@fuse';
import { useSelector } from 'react-redux';
import MonetizationOnSharpIcon from '@material-ui/icons/MonetizationOnSharp';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import DateRangeSharpIcon from '@material-ui/icons/DateRangeSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import NotificationsSharpIcon from '@material-ui/icons/NotificationsSharp';
import PeopleOutlineSharpIcon from '@material-ui/icons/PeopleOutlineSharp';
import EventSharpIcon from '@material-ui/icons/EventSharp';

const useStyles = makeStyles(theme => ({
    listItem: {
        color              : 'inherit!important',
        textDecoration     : 'none!important',
        height             : 40,
        width              : 'calc(100% - 16px)',
        borderRadius       : '0 20px 20px 0',
        paddingLeft        : 24,
        paddingRight       : 12,
        '&.active'         : {
            backgroundColor    : theme.palette.secondary.main,
            color              : theme.palette.secondary.contrastText + '!important',
            pointerEvents      : 'none',
            '& .list-item-icon': {
                color: 'inherit'
            }
        },
        '& .list-item-icon': {
            fontSize   : 16,
            width      : 16,
            height     : 16,
            marginRight: 16
        }
    }
}));

function AgendaAppSidebarContent(props) {
    const classes = useStyles();

    return (
        <FuseAnimate animation="transition.slideUpIn" delay={400}>

            <div className="flex-auto border-l-1">

                <List>
                    <ListItem
                        button
                        activeClassName="active"
                        component={NavLinkAdapter}
                        to={'/agenda/appointments'} key={1}
                        className={classes.listItem}
                    >
                        <EventSharpIcon className="list-item-icon active" />
                        <ListItemText primary='Appointments' disableTypography={true} />
                    </ListItem>
                    <ListItem
                        button
                        activeClassName="active"
                        component={NavLinkAdapter}
                        to={'/agenda/notifications'} key={2}
                        className={classes.listItem}
                    >
                        <NotificationsSharpIcon className="list-item-icon" />
                        <ListItemText primary='Notifications' disableTypography={true} />
                    </ListItem>
                    <ListItem
                        button
                        activeClassName="active"
                        component={NavLinkAdapter}
                        to={'/agenda/consultations'} key={3}
                        className={classes.listItem}
                    >
                        <PeopleOutlineSharpIcon className="list-item-icon" />
                        <ListItemText primary='Consultantions' disableTypography={true} />
                    </ListItem>

                </List>


                {/* <div className="p-20">
            <Button
                variant="outlined"
                color="primary"
                className="w-full"
                startIcon={<EventSharpIcon />}
            >
                Appointments
            </Button>
            </div>

            <div className="p-20">
            <Button
                variant="outlined"
                color="primary"
                className="w-full"
                startIcon={<NotificationsSharpIcon />}
            >
                Notifications
            </Button>
            </div>

            <div className="p-20">
            <Button
                variant="outlined"
                color="primary"
                className="w-full"
                startIcon={<PeopleOutlineSharpIcon />}
            >
                Consultations
            </Button>
            </div> */}
                         <div className="p-20">
            <Button
                variant="contained"
                color="primary"
                className="w-full"
                startIcon={<MonetizationOnSharpIcon />}
            >
                PROCESS SALE
            </Button>
            </div>

            <div className="p-20">
            <Button
                variant="contained"
                color="primary"
                className="w-full"
                startIcon={<GroupAddSharpIcon />}
            >
                REGISTER CLIENT
            </Button>
            </div>

            <div className="p-20">
            <Button
                variant="contained"
                color="primary"
                className="w-full"
                startIcon={<DateRangeSharpIcon />}
            >
                ADD APPOINTMENT
            </Button>
            </div>

            <div className="p-20">
            <Button
                variant="contained"
                color="primary"
                className="w-full"
                startIcon={<BlockSharpIcon />}
            >
                BLOCK TIME SLOT
            </Button>
            </div> 

            </div>
        </FuseAnimate>
    );
}

export default AgendaAppSidebarContent;