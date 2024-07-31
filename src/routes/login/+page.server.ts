import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
// import { message } from 'sveltekit-superforms';
// import { fail } from '@sveltejs/kit';

import { SignInFormSchema } from '$lib/forms/Login/SignInFormSchema';

export const load = (async (event) => {
	const form = await superValidate(zod(SignInFormSchema));
	const user = await event.locals.supabase.auth.getUser();
	const email = user.data.user?.email;
	return { form, email };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(SignInFormSchema));
		const email = form.data.email;
		const password = form.data.password;

		try {
			await event.locals.supabase.auth.signInWithPassword({ email, password });
			redirect(307, '/authenticated/console');
		} catch (error) {
			console.error(error);
		}
	}
} satisfies Actions;
