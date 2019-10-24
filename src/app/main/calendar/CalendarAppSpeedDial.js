import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import EditIcon from '@material-ui/icons/Edit';
import GroupAddSharpIcon from '@material-ui/icons/GroupAddSharp';
import BlockSharpIcon from '@material-ui/icons/BlockSharp';
import { useDispatch, useSelector } from 'react-redux';
import * as Actions from './store/actions';
import * as MessageActions from '../../../app/store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 99,
    transform: 'translateZ(0px)',
    flexGrow: 1,
  },
  speedDial: {
    position: 'absolute',
    right: 50,
    bottom: 60
  },
}));


export default function CalendarAppSpeedDial(props) {

  const dispatch = useDispatch();
  const selectedDates = useSelector(({ calendarApp }) => calendarApp.calendar.selectedDates);
  const filterStaff = useSelector(({ calendarApp }) => calendarApp.calendar.filterStaff);
  const growSpeedDial = useSelector(({ calendarApp }) => calendarApp.calendar.growSpeedDial);
  const classes = useStyles();
  const [hidden, setHidden] = React.useState(false);

  const handleVisibility = () => {
    setHidden(prevHidden => !prevHidden);
  };

  const handleOpen = () => {
    dispatch(Actions.setGrowSpeedDial(true));
  };

  const handleClose = () => {
    dispatch(Actions.setGrowSpeedDial(false));
  };

  const handleCreateAppointment = () => {
    if (selectedDates) {
      props.scheduler.showAppointmentPopup({
        staffMember: filterStaff[selectedDates.staffIndex].id,
        text: '',
        startDate: selectedDates.startDate,
        endDate: selectedDates.endDate,
        type:1
      }, true, null);
    }
    else {
      props.scheduler.showAppointmentPopup({
        staffMember: null,
        text: '',
        startDate: new Date(),
        endDate: null,
        type:1
      }, true, null)
    }

  };

  const handleCreateBlockedAppointment = () => {
    if (selectedDates) {
      props.scheduler.addAppointment({
        staffMember: filterStaff[selectedDates.staffIndex].id,
        text: '',
        startDate: selectedDates.startDate,
        endDate: selectedDates.endDate,
        type:2
      });

      dispatch(MessageActions.showMessage({message: 'Blocked timeslot set', variant: 'success'}));
    }
    else {
      props.scheduler.showAppointmentPopup({
        staffMember: null,
        text: '',
        startDate: new Date(),
        endDate: null,
        type: 2
      }, true, null)
    }

  };

  const actions = [
    { icon: <GroupAddSharpIcon />, name: 'Add Appointment', click: () => handleCreateAppointment() },
    { icon: <BlockSharpIcon />, name: 'Block Time Slot', click: () => handleCreateBlockedAppointment() }
  ];


  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={growSpeedDial}
      >
        {actions.map(action => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={action.click}
          />
        ))}
      </SpeedDial>
    </div>
  );
}