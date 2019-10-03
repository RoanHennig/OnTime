export const BUSINESS_TYPE_CHANGED = '[STEP1] BUSINESS TYPE CHANGED';

export function setBusinessType(businessType)
{
    return (dispatch) =>
    dispatch({
        type   : BUSINESS_TYPE_CHANGED,
        payload: businessType
    });
}