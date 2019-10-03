export const DISABLE_NEXT = '[BUSINESSSETUP] DISABLE NEXT';
export const ENABLE_NEXT = '[BUSINESSSETUP] ENABLE NEXT';

export function setEnableNext()
{
    return (dispatch) =>
    dispatch({
        type   : ENABLE_NEXT
    });
}

export function setDisableNext()
{
    return (dispatch) =>
    dispatch({
        type   : DISABLE_NEXT
    });
}