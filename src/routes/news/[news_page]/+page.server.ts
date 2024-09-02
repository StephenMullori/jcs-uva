import { queryNewsFromSlug } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const url = event.params.news_page;
	const article = await queryNewsFromSlug(url);
	if (article.length === 0) {
		throw error(404, 'Page not found');
	}
	return { article: article[0] };
}) satisfies PageServerLoad;
