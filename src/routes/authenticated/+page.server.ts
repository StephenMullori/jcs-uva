import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const { session } = await event.locals.safeGetSession();
	if (session !== null) {
		redirect(307, '/authenticated/console');
	} else {
		redirect(307, '/');
	}
	return {};
}) satisfies PageServerLoad;
