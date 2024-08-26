import { queryResearchFromSlug } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const url = event.params.article_page;

	const article = await queryResearchFromSlug(url);
	if (article.length === 0) {
		throw error(404, 'Page not found');
	}
	//console.log('date time', article[0]);
	console.log(article[0]);
	return { article: article[0] };
}) satisfies PageServerLoad;
