import { client } from '$lib/sanity/client';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	const querry = '*[_type=="article"]{slug}';
	const data = await client.fetch<number>(`count(*)`);
	const slugs = await client.fetch(querry);
	// data is typed as `number`
	console.log(`Number of documents: ${data}`);
	console.log(slugs);
	return {};
}) satisfies PageServerLoad;
