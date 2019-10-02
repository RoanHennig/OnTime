export const BUSINESS_NAME_CHANGED = '[STEP1] BUSINESS NAME CHANGED';
export const BUSINESS_DETAILS_CHANGED = '[STEP1] BUSINESS DETAILS CHANGED';
export const GET_STATE = '[STEP1] GET_STATE';

export function setBusinessName(newBusinessName)
{
    return (dispatch) =>
    dispatch({
        type   : BUSINESS_NAME_CHANGED,
        payload: newBusinessName
    });
}

export function setBusinessDetails(businessDetails)
{
    return (dispatch) =>
    dispatch({
        type   : BUSINESS_DETAILS_CHANGED,
        payload: businessDetails
    });
}

export function getBusinessDetails()
{
    return (dispatch) =>
    dispatch({
        type   : GET_STATE
    });
}