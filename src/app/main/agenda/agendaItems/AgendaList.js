import React, {useEffect, useState} from 'react';
import {List, Typography} from '@material-ui/core';
import {FuseUtils, FuseAnimate, FuseAnimateGroup} from '@fuse';
import {withRouter} from 'react-router-dom';
import * as Actions from '../store/actions';
import AgendaListItem from './AgendaListItem';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

function AgendaList(props)
{
    const [filteredData, setFilteredData] = useState(null);

    useEffect(() => {
        props.getAppointments(props.match.params);
    }, [props.match.params]);

    useEffect(() => {
        function getFilteredArray()
        {
            const arr = Object.keys(props.appointments).map((id) => props.appointments[id]);
            return arr;
        }

        if ( props.appointments )
        {
            setFilteredData(getFilteredArray());
        }
    }, [props.appointments]);

    if ( !filteredData )
    {
        return null;
    }

    if ( filteredData.length === 0 )
    {
        return (
            <FuseAnimate delay={100}>
                <div className="flex flex-1 items-center justify-center h-full">
                    <Typography color="textSecondary" variant="h5">
                        There are no appointments for the day!
                    </Typography>
                </div>
            </FuseAnimate>
        );
    }

    return (
        <List className="p-0">
            <FuseAnimateGroup
                enter={{
                    animation: "transition.slideUpBigIn",
                    delay:400
                }}
            >
                {
                    filteredData.map((agendaItem) => (
                            <AgendaListItem appointment={agendaItem} key={agendaItem.id}/>
                        )
                    )
                }
            </FuseAnimateGroup>
        </List>
    );
}

const mapStateToProps = state => {
    return {
        appointments: state.agendaApp.appointments.entities
    };
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getAppointments: Actions.getAppointments
    },
        dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AgendaList));