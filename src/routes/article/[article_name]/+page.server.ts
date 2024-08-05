import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
// import { superValidate } from 'sveltekit-superforms';
// import { zod } from 'sveltekit-superforms/adapters';
// import { message } from 'sveltekit-superforms';
// import { fail } from '@sveltejs/kit';
// import { LoginSchema } from '$lib/forms/LoginSchema';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async () => {}
} satisfies Actions;
