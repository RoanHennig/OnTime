import React, {useState} from 'react';
import {Checkbox, Icon, IconButton, Menu, MenuItem} from '@material-ui/core';
import {useSelector} from 'react-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function AgendaToolbar(props)
{
    return (
        <div className="flex flex-1 items-center sm:px-8">

            <Checkbox
                checked={props.appointments.selectedAgendaItemIds.length === Object.keys(props.appointments.entities).length && props.appointments.selectedAgendaItemIds.length > 0}
                indeterminate={props.appointments.selectedAgendaItemIds.length !== Object.keys(props.appointments.entities).length && props.appointments.selectedAgendaItemIds.length > 0}
            />
            
        </div>
    );

}


const mapStateToProps = state => {
    return {
        appointments: state.agendaApp.appointments
    };
}

export default connect(mapStateToProps, null)(AgendaToolbar);