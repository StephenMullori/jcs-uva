// consider if this is needed or not

import pg from 'pg';
import { db } from './db';

export const getRolefromUID: pg.QueryResult<any> = async (uid: string) => {
	const user = await db.query(`SELECT * from users where `);
	return user;
};
