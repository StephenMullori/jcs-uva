<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import HeaderBar from '$lib/components/HeaderBar.svelte';
	const { data }: { data: PageData } = $props();
	const { form } = superForm(data.form);
</script>

<div class="h-screen">
	<HeaderBar />
	<main class="my-24">
		<form
			action="?/login"
			method="post"
			class="border-grey-300 m-auto flex w-2/3 max-w-3xl flex-col gap-8 rounded-md border bg-gray-100 p-12"
		>
			<div class="">
				<label for="email" class="mr-2">Email</label>
				<input
					type="text"
					name="email"
					id="email"
					placeholder="example@something.com"
					class="border-grey-300 w- w-full max-w-72 rounded-sm border px-1 py-1"
					bind:value={$form.email}
				/>
			</div>

			<div class="">
				<label for="password" class="mr-2">Password</label>
				<input
					type="text"
					name="password"
					id="password"
					placeholder="password123"
					bind:value={$form.password}
					class="border-grey-300 w- w-full max-w-72 rounded-sm border px-1 py-1"
				/>
			</div>
			<button type="submit" class="bg-normal-800 px-5 py-3">Log In</button>
		</form>
	</main>
</div>
