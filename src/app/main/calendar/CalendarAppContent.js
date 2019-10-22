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
    let end;  
    let start;  
    var startData;  
    const createAppointment = useSelector(({ calendarApp }) => calendarApp.calendar.createAppointment);
    const downHandler = (e) => {  
        var el = (e.target);  
/*         if (el.hasClass("dx-scheduler-date-table-cell")) {  
            startData = el.data().dxCellData;  
            isSelectionStarted = true;  
            target = e.target;  
        }  */ 
        start = e.target.parentNode.rowIndex;
        console.log(e.target.parentNode.rowIndex);
    }  
    const upHandler = (e) => {  
        var el = (e.target);  
/*         if (el.hasClass("dx-scheduler-date-table-cell") && target !== e.target) {  
            if(isSelectionStarted) {  
                console.log('First Data ' + startData + ' - Second Data ' + el.data().dxCellData);  
             }  
        }   */
        end = e.target.parentNode.rowIndex;
        const startHours = businessSettings.startingTime + (start * 15 / 60);
        const startTime = start * 15 % 60;
        const endHours = startHours + ((end - start) * 15 / 60);
        const endTime = (end - start) * 15 % 60;
        console.log(startHours);
        console.log(endHours);
        const selectedDates = {
            startDate: new Date(2017, 5, 25, startHours, startTime),
            endDate: new Date(2017, 5, 25, endHours, endTime)
        };
        dispatch(Actions.setSelectedDates(selectedDates));
    } 

    const getAppointmentTooltipTemplate = (data) => {
        return <AppointmentTooltipTemplate data={data} scheduler={props.scheduler} />;
    }
    const onContentReady = (e) => {
        if(props.scheduler == null)
        {
            e.component.element().onpointerdown = downHandler;  
            e.component.element().onpointerup = upHandler; 
            props.setScheduler(e.component);     
        }
    }

    const dispatch = useDispatch();

    const user = useSelector(({auth}) => auth.user.data);
    const businessSettings = useSelector(({calendarApp}) => calendarApp.calendar.businessSettings);
    const filterStaff = useSelector(({calendarApp}) => calendarApp.calendar.filterStaff);
    const data = useSelector(({calendarApp}) => calendarApp.calendar.events);

    const groups = ['staffMember'];
    const currentDate = new Date(2017, 5, 25);
    const views = ['day', 'week', 'workWeek', 'month'];

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
                    cellDuration={15}
                    >
                        <Resource
                        dataSource={filterStaff}
                        fieldExpr={'staffMember'}
                        />
                        </Scheduler>
                </React.Fragment>

            </FuseAnimate>
    );
    
}


export default CalendarAppContent;

