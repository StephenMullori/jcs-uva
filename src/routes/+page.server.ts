import type { PageServerLoad } from './$types';

export const load = (async () => {
	return { why: 43 };
}) satisfies PageServerLoad;
