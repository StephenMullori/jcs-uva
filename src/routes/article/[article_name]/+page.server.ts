import { queryArticleFromSlug } from '$lib/sanity/queries';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (event) => {
	const url = event.params.article_name;
	console.log('url: ', url);
	const article = await queryArticleFromSlug(url);
	if (article.length === 0) {
		throw error(404, 'Page not found');
	}
	console.log(article[0].editor);

	return { article: article[0] };
}) satisfies PageServerLoad;
