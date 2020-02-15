/** @format */

import { INIT_LOCAL_DB, UPDATE_RESULT, RESET } from './reducer';

export const initDb = ({ currentCalculation, result }) => ({
	type: INIT_LOCAL_DB,
	payload: {
		currentCalculation,
		result,
	},
});

export const updateResult = ({ currentCalculation, result = 0 }) => ({
	type: UPDATE_RESULT,
	payload: {
		currentCalculation,
		result,
	},
});

export const reset = () => ({
	type: RESET,
});
