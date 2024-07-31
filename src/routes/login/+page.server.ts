import { redirect, type Actions } from '@sveltejs/kit';
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
		const supabase = event.locals.supabase;
		try {
			const { data, error } = await supabase.auth.signInWithPassword({ email, password });
			console.log('data:\n', data);
			console.log('error:\n', error);
		} catch (error) {
			console.log('errrorrrrrrrr');
			console.error(error);
		}

		supabase.auth.onAuthStateChange(() => {
			console.log('authenticated');
			console.log(supabase.auth.getUser);
			redirect(307, '/authenticated/console');
		});
	}
} satisfies Actions;
