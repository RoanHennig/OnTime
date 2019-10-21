export const createAppointment = function(e) {
    const scheduler = e.component;
  
    scheduler.showAppointmentPopup({
      startDate: e.cellData.startDate
    }, true);
  };
  
  export const createRecurringAppointment = function(e) {
    const scheduler = e.component;
  
    scheduler.showAppointmentPopup({
      startDate: e.cellData.startDate,
      recurrenceRule: 'FREQ=DAILY'
    }, true);
  };
  
  export const groupCell = function(e) {
    const scheduler = e.component;
  
    if(scheduler.option('groups')) {
      scheduler.option('crossScrollingEnabled', false);
      scheduler.option('groups', undefined);
    } else {
      scheduler.option('crossScrollingEnabled', true);
      scheduler.option('groups', ['roomId']);
    }
  };
  
  export const showCurrentDate = function(e) {
    const scheduler = e.component;
  
    scheduler.option('currentDate', new Date());
  };
  
  export const showAppointment = function(e) {
    const scheduler = e.component;
  
    scheduler.showAppointmentPopup(e.appointmentData);
  };
  
  export const deleteAppointment = function(e) {
    const scheduler = e.component;
  
    scheduler.deleteAppointment(e.appointmentData);
  };
  
  export const repeatAppointmentWeekly = function(e) {
    const scheduler = e.component;
  
    scheduler.updateAppointment(e.appointmentData, {
      startDate: e.targetedAppointmentData.startDate,
      recurrenceRule: 'FREQ=WEEKLY'
    });
  };
  
  export const setResource = function(e, clickEvent) {
    const scheduler = e.component;
  
    scheduler.updateAppointment(
      e.appointmentData,
      { roomId: [clickEvent.itemData.id] }
    );
  };
  
  export const cellContextMenuItems = [
    { text: 'New Appointment', onItemClick: createAppointment },
    { text: 'New Recurring Appointment', onItemClick: createRecurringAppointment },
    { text: 'Group by Room/Ungroup', beginGroup: true, onItemClick: groupCell },
    { text: 'Go to Today', onItemClick: showCurrentDate }
  ];
  
  export const appointmentContextMenuItems = [
    { text: 'Open', onItemClick: showAppointment },
    { text: 'Delete', onItemClick: deleteAppointment },
    { text: 'Repeat Weekly', beginGroup: true, onItemClick: repeatAppointmentWeekly },
    { text: 'Set Room', beginGroup: true, disabled: true }
  ];
  