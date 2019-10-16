import service from '../../data/agendaSidebar-mock.js';

export const GET_STAFF_MEMBERS = '[AGENDA APP] GET STAFF MEMBERS';

export function getStaffMembers(businessId)
{
    const data = service.getMockStaffMembers(businessId);
    return (dispatch) =>
    dispatch({
        type   : GET_STAFF_MEMBERS,
        payload: data
    });
}