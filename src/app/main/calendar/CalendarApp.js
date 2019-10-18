import React,{useEffect, useState} from 'react';

import { makeStyles } from '@material-ui/styles';
import {FusePageSimple} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import Scheduler from 'devextreme-react/scheduler';
import * as Actions from './store/actions';
import withReducer from 'app/store/withReducer';
import reducer from './store/reducers';

function CalendarApp(props)  {

    const dispatch = useDispatch();
    const user = useSelector(({auth}) => auth.user.data);
    const data = useSelector(({calendarApp}) => calendarApp.calendar.events);
    const currentDate = new Date(2017, 4, 25);
    const views = [{type:'day',cellDuration:15}, 'week', 'workWeek', 'month'];
    const useStyles = makeStyles(theme => ({}));

    useEffect(() => {
        dispatch(Actions.getEvents());
    }, [user.user_id]);

    const classes = useStyles();
        return (
            <FusePageSimple
                classes={{
                    root: classes.layoutRoot
                }}
                contentToolbar={
                    <div className="px-24"><h4>My Calendar</h4></div>
                }
                content={
                    <div className="p=24">
                        <Scheduler
                        dataSource={data}
                        views={views}
                        defaultCurrentView={'day'}
                        defaultCurrentDate={currentDate}
                        startDayHour={9}
                        cellDuration={15}
                        cell />
                    </div>
                }
            />
        )
}

export default withReducer('calendarApp', reducer)(CalendarApp);