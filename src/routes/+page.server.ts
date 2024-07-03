import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
export const load = ((event) => {
	// data validation pattern
	// let user;
	// try {
	// 	user = event.locals.user
	// 	if (user !== null){
	// 		return {user}
	// 	}
	// 	error(404, "")
	// }
	// catch (e){
	// 	console.log(e)
	// 	throw e;
	// }

	// so this should make a database queery to populate the different parts of the home page
	console.log('run on load');

	return {};
}) satisfies PageServerLoad;
