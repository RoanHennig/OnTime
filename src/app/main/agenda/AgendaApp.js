import React, {useRef} from 'react';
import {FusePageCarded,FuseAnimate} from '@fuse';
import withReducer from 'app/store/withReducer';
import AgendaList from './agendaItems/AgendaList';
import AgendaSpeedDial from './agendaItems/AgendaSpeedDial';
import AppointmentDetails from './appointment/AppointmentDetails';
import AppointmentToolbar from './appointment/AppointmentToolbar';
import AgendaToolbar from './agendaItems/AgendaToolbar';
import AgendaAppHeader from './AgendaAppHeader';
import AgendaAppSidebarHeader from './AgendaAppSidebarHeader';
import AgendaAppSidebarContent from './AgendaAppSidebarContent';
import reducer from './store/reducers';

function AgendaApp(props) {

    const pageLayout = useRef(null);

    return (
        <React.Fragment>
        <FusePageCarded
            classes={{
                contentWrapper: "p-24 pb-20 sm:pb-20 h-full",
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
                    <AgendaToolbar/>
                )
            }
            content={
                props.match.params.appointmentId ? (
                    <AppointmentDetails/>
                ) : (
                    <div>
                        <AgendaList/>               
                    </div>
                    
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
            <FuseAnimate animation="transition.expandIn" delay={300}>
                <AgendaSpeedDial/>
            </FuseAnimate>
        </React.Fragment>
    )
}


export default withReducer('agendaApp', reducer)(AgendaApp);
