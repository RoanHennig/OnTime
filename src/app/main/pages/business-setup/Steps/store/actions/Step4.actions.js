export const OPERATING_HOURS_CHANGED = '[STEP 4] OPERATING HOURS CHANGED';
export const BUSINESS_OPERATING_HOURS_CHANGED = '[STEP 4] BUSINESS OPERATING HOURS CHANGED';

export function setOperatingHours(operatingHours)
{
    return (dispatch) =>
    dispatch({
        type   : OPERATING_HOURS_CHANGED,
        payload: operatingHours
    });
}

export function setBusinessOperatingHours(operatingHours)
{
    return (dispatch) =>
    dispatch({
        type   : BUSINESS_OPERATING_HOURS_CHANGED,
        payload: operatingHours
    });
}