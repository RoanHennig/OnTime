import service from '../../data/agendaSidebar-mock.js';

export const GET_STAFF_MEMBERS = '[AGENDA APP] GET STAFF MEMBERS';
export const SET_AGENDA_ITEMS_BADGES = '[AGENDA APP] SET AGENDA ITEMS BADGES';

export function getStaffMembers(businessId)
{
    const data = service.getMockStaffMembers(businessId);
    return (dispatch) =>
    dispatch({
        type   : GET_STAFF_MEMBERS,
        payload: data
    });
}

export function setAgendaItemsBadges(items)
{
    const newAgendaItemBadges = {
        appointments: items.appointments.length,
        notifications: items.notifications.length,
        consultations: items.consultations.length
    };

    return (dispatch) =>
    dispatch({
        type   : SET_AGENDA_ITEMS_BADGES,
        payload: newAgendaItemBadges
    });
}