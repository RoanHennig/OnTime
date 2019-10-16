import React, {useEffect, useState} from 'react';
import {MenuItem, TextField} from '@material-ui/core';
import {FuseAnimate} from '@fuse';
import {useDispatch, useSelector} from 'react-redux';
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import * as Actions from './store/actions';

function AgendaAppSidebarHeader(props)
{
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(Actions.getStaffMembers(0));
    }, []);

    const staff = useSelector(({agendaApp}) => agendaApp.agendaSidebar.staff);
    const [selectedStaff, setSelectedStaff] = useState('owner');

    function handleStaffChange(ev)
    {
        setSelectedStaff(ev.target.value);
    }
    
    return (
        <div className="flex flex-col justify-center h-full p-24">

            <div className="flex items-center flex-1">
                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <CalendarTodaySharpIcon className="mr-16 text-32" />
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <span className="text-24">Today</span>
                </FuseAnimate>
            </div>

            <FuseAnimate animation="transition.slideUpIn" delay={300}>
                <TextField
                    id="staff-selection"
                    select
                    label={selectedStaff}
                    value={selectedStaff}
                    onChange={handleStaffChange}
                    placeholder="Select Staff Member"
                    margin="normal"
                >
                    {staff.map(staffMember => (
                        <MenuItem key={staffMember.userId} value={staffMember.businessRole}>
                            {staffMember.name}
                        </MenuItem>
                    ))}
                </TextField>
            </FuseAnimate>
        </div>
    );
}

export default AgendaAppSidebarHeader;