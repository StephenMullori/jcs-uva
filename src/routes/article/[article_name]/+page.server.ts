import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { test: 52 };
}) satisfies PageServerLoad;
