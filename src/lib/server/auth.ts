import { Lucia } from 'lucia';
import { NodePostgresAdapter } from '@lucia-auth/adapter-postgresql';
import { db } from './db';

const adapter = new NodePostgresAdapter(db, {
	user: 'users',
	session: 'sessions'
});

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: process.env.NODE_ENV === 'production'
		}
	},
	getUserAttributes: (attributes) => {
		return {
			username: attributes.username,
			role: attributes.role,
			firstName: attributes.firstName,
			lastName: attributes.lastName
		};
	}
});

// IMPORTANT!
declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	username: string;
	role: string;
	firstName: string;
	lastName: string;
}
