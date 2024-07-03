import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const uid = event.locals.session?.userId;

	return {};
}) satisfies PageServerLoad;

export const actions = {
	test: async () => {}
};
