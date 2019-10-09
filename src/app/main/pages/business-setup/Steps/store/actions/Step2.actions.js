export const BUSINESS_TYPE_CHANGED = '[STEP2] BUSINESS TYPE CHANGED';

export function setBusinessType(businessType)
{
    return (dispatch) =>
    dispatch({
        type   : BUSINESS_TYPE_CHANGED,
        payload: businessType
    });
}