import type { PageServerLoad } from './$types';
export const load = (() => {
	// so this should make a database queery to populate the different parts of the home page
	console.log('run on load');
}) satisfies PageServerLoad;
