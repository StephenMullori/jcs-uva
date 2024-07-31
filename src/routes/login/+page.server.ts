import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
// import { message } from 'sveltekit-superforms';
// import { fail } from '@sveltejs/kit';

import { SignInFormSchema } from '$lib/forms/Login/SignInFormSchema';

export const load = (async () => {
	const form = await superValidate(zod(SignInFormSchema));
	return { form };
}) satisfies PageServerLoad;

export const actions: Actions = {
	default: async (event) => {
		const form = await superValidate(event.request, zod(SignInFormSchema));
		const email = form.data.email;
		const password = form.data.password;
		const supabase = event.locals.supabase;
		try {
			await supabase.auth.signInWithPassword({ email, password });
		} catch (error) {
			console.error(error);
		}
		supabase.auth.onAuthStateChange(() => {
			redirect(307, '/authenticated/console');
		});
	}
} satisfies Actions;
