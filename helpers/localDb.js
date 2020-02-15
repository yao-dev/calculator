/** @format */

import localforage from 'localforage';
import { initialState } from 'components/Calculator/reducer';

export const dbName = 'calculator';

localforage.config({
	driver: localforage.WEBSQL, // Force WebSQL; same as using setDriver()
	name: dbName,
	version: 1.0,
	// size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
	// storeName   : 'keyvaluepairs', // Should be alphanumeric, with underscores.
	// description : 'some description'
});

export const db = localforage.createInstance({
	name: dbName,
});

export const getDbState = async () => {
	try {
		const dbState = await db.getItem(dbName);
		return dbState;
	} catch (e) {
		console.log('getDbState', e);
		return initialState;
	}
};

export const dbSave = async (item = initialState, cbk) => {
	try {
		await db.setItem(dbName, item);
		const dbState = await db.getItem(dbName);

		return cbk(dbState);
	} catch (e) {
		console.log('dbSave', e);
		return cbk(item);
	}
};

export default {
	db,
	getDbState,
	dbSave,
};
