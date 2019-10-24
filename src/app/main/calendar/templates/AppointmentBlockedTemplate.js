import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function AppointmentBlockedTemplate(data) {

    return (
        <div className={"flex flex-col h-full align-middle flex-auto flex-shrink-0 items-center justify-center"}>
            <Typography color="inherit" className="text-20 sm:text-32 font-light">
                Lunch Break
            </Typography>
        </div>
    );
}
