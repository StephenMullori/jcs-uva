import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const { session, user } = await event.locals.safeGetSession();
	console.log(user?.email);
	if (session === null) {
		redirect(307, '/');
	}

	return {};
}) satisfies PageServerLoad;
