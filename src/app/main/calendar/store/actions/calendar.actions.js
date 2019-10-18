import serviceEvents from '../../data/calendardata-mock.js';

export const GET_EVENTS = '[CALENDAR APP] GET EVENTS';

export function getEvents (user)
{
    const events = serviceEvents.getMockCalendarEvents(user);
    return (dispatch) =>
    dispatch({
        type   : GET_EVENTS,
        payload: events
    });
}