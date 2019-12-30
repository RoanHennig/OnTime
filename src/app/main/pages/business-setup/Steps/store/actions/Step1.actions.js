export const BUSINESS_DETAILS_CHANGED = '[STEP1] BUSINESS DETAILS CHANGED';

export function setBusinessDetails(businessDetails)
{
    return (dispatch) =>
    dispatch({
        type   : BUSINESS_DETAILS_CHANGED,
        payload: businessDetails
    });
}