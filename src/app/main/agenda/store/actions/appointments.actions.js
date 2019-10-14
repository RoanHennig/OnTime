export const GET_APPOINTMENTS = '[AGENDA APP] GET APPOINTMENTS';

export function getAppointments()
{
    return (dispatch) =>
    dispatch({
        type   : GET_APPOINTMENTS
    });
}