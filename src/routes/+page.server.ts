import { queryHomePage } from '$lib/sanity/queries';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const homePage = await queryHomePage();
	console.log(homePage.length);
	return { homePage };
}) satisfies PageServerLoad;
