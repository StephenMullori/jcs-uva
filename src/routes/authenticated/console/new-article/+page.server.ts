import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { NewArticleSchema } from '$lib/forms/NewArticle/NewArticleSchema';

export const load = (async (event) => {
	const { session } = await event.locals.safeGetSession();
	if (session === null) {
		redirect(307, '/');
	}
	const form = await superValidate(zod(NewArticleSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(NewArticleSchema));
		console.log(form);
	}
} satisfies Actions;
