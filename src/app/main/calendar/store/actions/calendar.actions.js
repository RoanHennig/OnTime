import serviceEvents from '../../data/calendardata-mock.js';

export const GET_EVENTS = '[CALENDAR APP] GET EVENTS';
export const GET_STAFF_MEMBERS = '[CALENDAR APP] GET STAFF MEMBERS';
export const SET_FILTER_STAFF_MEMBERS = '[CALENDAR APP] SET FILTER STAFF MEMBERS';
export const SET_SELECTED_DATES = '[CALENDAR APP] SET SELECTED DATES';

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

export function setFilterStaffMembers (filter)
{
    return (dispatch) =>
    dispatch({
        type   : SET_FILTER_STAFF_MEMBERS,
        payload: filter
    });
}

export function setSelectedDates (selectedDates)
{
    return (dispatch) =>
    dispatch({
        type   : SET_SELECTED_DATES,
        payload: selectedDates
    });
}