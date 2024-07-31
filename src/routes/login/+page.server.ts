import type { Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
// import { message } from 'sveltekit-superforms';
// import { fail } from '@sveltejs/kit';

import { LoginSchema } from '$lib/forms/LoginSchema';

export const load = (async () => {
	const form = await superValidate(zod(LoginSchema));
	console.log('running');
	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	login: async (event) => {
		const form = await superValidate(event.request, zod(LoginSchema));
		const email = form.data.email;
		const password = form.data.password;

		try {
			const supabase = event.locals.supabase;
			await supabase.auth.signInWithPassword({ email, password });
		} catch (error) {
			console.error(error);
			redirect(303, '/auth/error');
		}
	}
} satisfies Actions;
