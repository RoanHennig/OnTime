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
    var isSelectionStarted = false;  
    var target;  
    var startData;  
    const downHandler = (e) => {  
        var el = (e.target);  
        if (el.hasClass("dx-scheduler-date-table-cell")) {  
            startData = el.data().dxCellData;  
            isSelectionStarted = true;  
            target = e.target;  
        }  
        console.log('hello!');
    }  
    const upHandler = (e) => {  
        var el = (e.target);  
        if (el.hasClass("dx-scheduler-date-table-cell") && target !== e.target) {  
            if(isSelectionStarted) {  
                console.log('First Data ' + startData + ' - Second Data ' + el.data().dxCellData);  
             }  
        }  
        console.log('bye!');
        isSelectionStarted = false;  
        target = null;  
        startData = null;  
    } 

    const getAppointmentTooltipTemplate = (data) => {
        return <AppointmentTooltipTemplate data={data} scheduler={scheduler} />;
    }
    const onContentReady = (e) => {
        e.component.off( "dxpointerdown", downHandler );  
        e.component.off( "dxpointerup", upHandler );  
        e.component.on("dxpointerdown", downHandler);  
        e.component.on("dxpointerup", upHandler);

        if(scheduler == null)
        {
            setScheduler({ scheduler: e.component });
            scheduler.addAppointment({
                staffMember: 'auth0|5da6c12c379f840df8a55437',
                text: 'Cut & Blow dry',
                startDate: new Date(2017, 5, 25, 15, 30),
                endDate: new Date(2017, 5, 25, 16, 30)
            });
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

