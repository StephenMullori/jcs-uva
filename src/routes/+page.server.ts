import { queryHomePage } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const homePage = await queryHomePage();
	console.log(homePage);
	return { homePage };
}) satisfies PageServerLoad;
