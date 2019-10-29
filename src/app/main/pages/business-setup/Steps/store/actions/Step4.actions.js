export const OPERATING_HOURS_CHANGED = '[STEP 4] OPERATING HOURS CHANGED';

export function setOperatingHours(operatingHours) {
	return (dispatch) =>
		dispatch({
			type: OPERATING_HOURS_CHANGED,
			payload: operatingHours
		});
}
