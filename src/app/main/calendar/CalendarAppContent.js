import React, {useEffect, useState} from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './store/actions';
import {FuseAnimate} from '@fuse';
import AppointmentTooltipTemplate from './templates/AppointmentTooltipTemplate';
import ContextMenu from 'devextreme-react/context-menu';
import { cellContextMenuItems, appointmentContextMenuItems} from './templates/MenuItems.js';

function CalendarAppContent(props)
{
    const [cellContextMenuEvent, setCellContextMenuEvent] = useState(null);
    const [appointmentContextMenuEvent, setAppointmentContextMenuEvent] = useState(null);
    
    const onAppointmentContextMenu = (e) => {
        setAppointmentContextMenuEvent(e);
      }
    
    const onAppointmentContextMenuItemClick = (e) => {
        if (!e.itemData.items && e.itemData.onItemClick) {
          e.itemData.onItemClick(appointmentContextMenuEvent, e);
        }
    }
    
    const onCellContextMenuItemClick = (e) => {
        e.itemData.onItemClick(cellContextMenuEvent);
    }

    onCellContextMenu = (e) => {
        setCellContextMenuEvent(e);
    }

    const getAppointmentTooltipTemplate = (data) => {
        return <AppointmentTooltipTemplate data={data} scheduler={scheduler} />;
    }
    const onContentReady = (e) => {
        scheduler === null &&  setScheduler({ scheduler: e.component });
    }

    const dispatch = useDispatch();

    const user = useSelector(({auth}) => auth.user.data);
    const businessSettings = useSelector(({calendarApp}) => calendarApp.calendar.businessSettings);
    const filterStaff = useSelector(({calendarApp}) => calendarApp.calendar.filterStaff);
    const data = useSelector(({calendarApp}) => calendarApp.calendar.events);

    const groups = ['staffMember'];
    const currentDate = new Date(2017, 5, 25);
    const views = ['day', 'week', 'workWeek', 'month'];
    const [scheduler, setScheduler] = useState(null);

    useEffect(() => {
        dispatch(Actions.getEvents());
        dispatch(Actions.getStaffMembers());

    }, [user.user_id]);

    return (
        <FuseAnimate
            animation="transition.fadeIn"
            duration={200}
            delay={200}
            >
                <React.Fragment>
                <Scheduler
                    dataSource={data}
                    views={views}
                    groups={groups}
                    showCurrentTimeIndicator={true}
                    adaptivityEnabled={props.isMobile}
                    defaultCurrentView={'day'}
                    defaultCurrentDate={currentDate}
                    startDayHour={businessSettings.startingTime}
                    endDayHour={businessSettings.endingTime}
                    appointmentTooltipRender={getAppointmentTooltipTemplate}
                    onContentReady={onContentReady}              
                    onCellContextMenu={onCellContextMenu}
                    cellDuration={15}
                    >
                        <Resource
                        dataSource={filterStaff}
                        fieldExpr={'staffMember'}
                        />
                        </Scheduler>
                        <ContextMenu
                        dataSource={appointmentContextMenuItems}
                        width={200}
                        target={'.dx-scheduler-appointment'}
                        />
                        <ContextMenu
                        dataSource={cellContextMenuItems}
                        width={200}
                        onItemClick={onCellContextMenuItemClick}
                        target={'.dx-scheduler-date-table-cell'}
                        />
                </React.Fragment>

            </FuseAnimate>
    );
    
}


export default CalendarAppContent;

