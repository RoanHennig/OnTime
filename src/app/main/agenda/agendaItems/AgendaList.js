import React, {useEffect, useState} from 'react';
import {List, Typography} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import * as Actions from '../store/actions';
import AgendaListItem from './AgendaListItem';

function AgendaList(props)
{
    const dispatch = useDispatch();
    const items = useSelector(({agendaApp}) => agendaApp.agendaItems.items);
    const appointments = useSelector(({agendaApp}) => agendaApp.agendaItems.items.appointments);
    const notifications = useSelector(({agendaApp}) => agendaApp.agendaItems.items.notifications);
    const user = useSelector(({auth}) => auth.user.data);
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        dispatch(Actions.setAgendaItemsBadges(items));
    }, [items]);

    useEffect(() => {
        dispatch(Actions.getAppointments(user.user_id));
        dispatch(Actions.getNotifications(user.user_id));
        dispatch(Actions.getNotifications(user.user_id));
    }, [user.user_id]);

    useEffect(() => {

        function getFilteredArray()
        {
            if(props.match.params.agendaHandle === 'appointments') {
                return Object.keys(appointments).map((id) => appointments[id]);
            }
            else if(props.match.params.agendaHandle === 'notifications') {
                return Object.keys(notifications).map((id) => notifications[id]);
            }

            const arr = Object.keys(appointments).map((id) => appointments[id]);
            return arr;
        }

        if ( appointments || notifications )
        {
            setFilteredData(getFilteredArray());
        }
    }, [appointments,notifications,props.match.params]);

    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <FuseAnimate delay={100}>
                <div className="flex flex-1 items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        There are no appointments for the day!
                    </Typography>
                </div>
            </FuseAnimate>
        );
    }

    return (
        <List className="p-0">
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn",
                    delay:300
                }}
            >
                {
                    filteredData.map((agendaItem) => (
                            <AgendaListItem item={agendaItem} itemType={props.match.params.agendaHandle} key={agendaItem.id}/>
                        )
                    )
                }
            </FuseAnimateGroup>
        </List>
    );
}


export default withRouter(AgendaList);