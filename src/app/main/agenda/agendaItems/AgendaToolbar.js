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
                checked={props.agendaItems.selectedAgendaItemIds.length === Object.keys(props.agendaItems.items.appointments).length && props.agendaItems.selectedAgendaItemIds.length > 0}
                indeterminate={props.agendaItems.selectedAgendaItemIds.length !== Object.keys(props.agendaItems.items.appointments).length && props.agendaItems.selectedAgendaItemIds.length > 0}
            />
            
        </div>
    );

}


const mapStateToProps = state => {
    return {
        agendaItems: state.agendaApp.agendaItems
    };
}

export default connect(mapStateToProps, null)(AgendaToolbar);