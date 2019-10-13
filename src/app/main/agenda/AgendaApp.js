import React, {useRef} from 'react';
import {FusePageCarded} from '@fuse';
import {useDispatch} from 'react-redux';
import withReducer from 'app/store/withReducer';
import AppointmentList from './appointments/AppointmentList';
import AppointmentDetails from './appointment/AppointmentDetails';
import AppointmentToolbar from './appointment/AppointmentToolbar';
import AppointmentsToolbar from './appointments/AppointmentsToolbar';
import AgendaAppHeader from './AgendaAppHeader';
import AgendaAppSidebarHeader from './AgendaAppSidebarHeader';
import AgendaAppSidebarContent from './AgendaAppSidebarContent';
import reducer from './store/reducers';


function AgendaApp(props) {

    const pageLayout = useRef(null);

    return (
        <FusePageCarded
            classes={{
                root   : "w-full",
                content: "flex flex-col",
                header : "items-center min-h-72 h-72 sm:h-136 sm:min-h-136"
            }}
            header={
                <AgendaAppHeader pageLayout={pageLayout}/>
            }
            contentToolbar={
                props.match.params.appointmentId ? (
                    <AppointmentToolbar/>
                ) : (
                    <AppointmentsToolbar/>
                )
            }
            content={
                props.match.params.appointmentId ? (
                    <AppointmentDetails/>
                ) : (
                    <AppointmentList/>
                )
            }
            leftSidebarHeader={
                <AgendaAppSidebarHeader/>
            }
            leftSidebarContent={
                <AgendaAppSidebarContent/>
            }
            ref={pageLayout}
            innerScroll
        />
}


export default withReducer('agendaApp', reducer)(AgendaApp);
