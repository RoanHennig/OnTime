import serviceEvents from '../../data/calendardata-mock.js';

export const GET_EVENTS = '[CALENDAR APP] GET EVENTS';
export const GET_STAFF_MEMBERS = '[CALENDAR APP] GET STAFF MEMBERS';

export function getEvents (user)
{
    const events = serviceEvents.getMockCalendarEvents(user);
    return (dispatch) =>
    dispatch({
        type   : GET_EVENTS,
        payload: events
    });
}

export function getStaffMembers (user)
{
    const staff = serviceEvents.getMockStaffData(user);
    return (dispatch) =>
    dispatch({
        type   : GET_STAFF_MEMBERS,
        payload: staff
    });
}