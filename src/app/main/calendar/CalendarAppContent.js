import React, {useEffect, useState} from 'react';
import Scheduler, { Resource } from 'devextreme-react/scheduler';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from './store/actions';
import { makeStyles } from '@material-ui/styles';
import {FuseAnimate} from '@fuse';
import AppointmentTooltipTemplate from './templates/AppointmentTooltipTemplate';

function CalendarAppContent(props)
{
    const getAppointmentTooltipTemplate = (data) => {
        return <AppointmentTooltipTemplate data={data} scheduler={scheduler} />;
    }
    const onContentReady = (e) => {
        scheduler === null &&  setScheduler({ scheduler: e.component });
    }

    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user.data);
    const businessSettings = useSelector(({calendarApp}) => calendarApp.calendar.businessSettings);

    const staff = useSelector(({calendarApp}) => calendarApp.calendar.staff);
    const data = useSelector(({calendarApp}) => calendarApp.calendar.events);
    const groups = ['staffMemberId'];
    const currentDate = new Date(2017, 5, 25);
    const views = ['day', 'week', 'workWeek', 'month'];
    const useStyles = makeStyles(theme => ({}));
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
                dataSource={staff}
                fieldExpr={'staffMemberId'}
                />
                </Scheduler>
            </FuseAnimate>
    );
    
}


export default CalendarAppContent;

