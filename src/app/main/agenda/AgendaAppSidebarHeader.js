import React, {useState} from 'react';
import {Icon, MenuItem, TextField} from '@material-ui/core';
import {FuseAnimate} from '@fuse';

const staff = {
    'owner'    : 'Roan Hennig',
    'staff': 'Mdare Swart'
};

function AgendaAppSidebarHeader(props)
{
    const [selectedStaff, setSelectedStaff] = useState('owner');

    function handleStaffChange(ev)
    {
        setSelectedStaff(ev.target.value);
    }

    
    return (
        <div className="flex flex-col justify-center h-full p-24">

            <div className="flex items-center flex-1">
                <FuseAnimate animation="transition.expandIn" delay={300}>
                    <Icon className="mr-16 text-32">calendar</Icon>
                </FuseAnimate>
                <FuseAnimate animation="transition.slideLeftIn" delay={300}>
                    <span className="text-24">Agenda</span>
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
                    {Object.keys(staff).map((key, value) => (
                        <MenuItem key={key} value={key}>
                            {staff[key]}
                        </MenuItem>
                    ))}
                </TextField>
            </FuseAnimate>
        </div>
    );
}

export default AgendaAppSidebarHeader;