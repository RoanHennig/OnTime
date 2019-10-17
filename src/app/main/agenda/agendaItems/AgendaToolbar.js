import React, {useEffect, useState} from 'react';
import {Checkbox, Icon, IconButton, Menu, MenuItem} from '@material-ui/core';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../store/actions/index';
import {withRouter} from 'react-router-dom';

function AgendaToolbar(props)
{
    useEffect(() => {
        if(props.match.params.agendaHandle === 'appointments') {
            setCurrentItems(items.appointments);
        }
        else if(props.match.params.agendaHandle === 'notifications') {
            setCurrentItems(items.notifications);
        }
    }, [props.match.params]);

    
    const handleCheckChange = (event) => {
        event.target.checked ? dispatch(Actions.selectAllItems(currentItems)) : dispatch(Actions.deselectAllItems());
    };

    const dispatch = useDispatch();
    const selectedAgendaItemIds = useSelector(({agendaApp}) => agendaApp.agendaItems.selectedAgendaItemIds);
    const items = useSelector(({agendaApp}) => agendaApp.agendaItems.items);
    const [currentItems, setCurrentItems] = useState([]);

    return (
        <div className="flex flex-1 items-center sm:px-8">

            <Checkbox
                onChange={handleCheckChange}
                checked={selectedAgendaItemIds.length === currentItems.length && selectedAgendaItemIds.length > 0}
                indeterminate={selectedAgendaItemIds.length !== currentItems.length && selectedAgendaItemIds.length > 0}
            />





            {selectedAgendaItemIds.length > 0 && (
                <React.Fragment>

                    <div className="border-r-1 h-48 w-1 mx-12 my-0"/>

                    <IconButton
                        //onClick={(ev) => dispatch(Actions.setFolderOnSelectedMails(4))}
                        aria-label="Clear"
                    >
                        <DoneAllIcon />
                    </IconButton>

                </React.Fragment>
            )}
        </div>
    );

}

export default withRouter(AgendaToolbar);