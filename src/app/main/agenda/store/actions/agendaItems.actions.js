
import serviceAppointments from '../../data/appointments-mock.js';
import serviceNotifications from '../../data/notifications-mock.js';

export const GET_APPOINTMENTS = '[AGENDA APP] GET APPOINTMENTS';
export const GET_NOTIFICATIONS = '[AGENDA APP] GET NOTIFICATIONS';
export const GET_CONSULTATIONS = '[AGENDA APP] GET CONSULTATIONS';
export const TOGGLE_IN_SELECTED_AGENDA_ITEMS = '[AGENDA APP] TOGGLE IN SELECTED AGENDA ITEMS';
export const SELECT_ALL_ITEMS = '[AGENDA APP] SELECT ALL ITEMS';
export const DESELECT_ALL_ITEMS = '[AGENDA APP] DESELECT ALL ITEMS';

export function getAppointments(user)
{
    const appointments = serviceAppointments.getmockappointments(user);
    return (dispatch) =>
    dispatch({
        type   : GET_APPOINTMENTS,
        payload: appointments
    });
}

export function getNotifications(user)
{
    const notifications = serviceNotifications.getMockNotifications(user);
    return (dispatch) =>
    dispatch({
        type   : GET_NOTIFICATIONS,
        payload: notifications
    });
}

export function toggleInSelectedAgendaItems(agendaItemId)
{
    return {
        type: TOGGLE_IN_SELECTED_AGENDA_ITEMS,
        agendaItemId
    }
}

export function selectAllItems(items)
{
    return {
        type: SELECT_ALL_ITEMS,
        payload: items
    }
}

export function deselectAllItems()
{
    return {
        type: DESELECT_ALL_ITEMS
    }
}

/* export function getConsultations(user)
{
    const consultations = service.getMockConsultations(user);
    return (dispatch) =>
    dispatch({
        type   : GET_CONSULTATIONS,
        payload: consultations
    });
} */