import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const client = event.locals.supabase;
	console.log(client);
	return { client: 'test' };
}) satisfies PageServerLoad;
