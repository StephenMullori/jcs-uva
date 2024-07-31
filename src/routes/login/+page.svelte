<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import type { PageData } from './$types';
	import HeaderBarConsole from '$lib/components/HeaderBarConsole/HeaderBarConsole.svelte';
	import LoginForm from '$lib/forms/Login/LoginForm.svelte';
	const { data }: { data: PageData } = $props();
	const { form } = superForm(data.form);
</script>

<div class="h-screen">
	<HeaderBarConsole userEmail={data.session?.user.email} />
	<main class="my-24">
		<LoginForm data={data.form} />
	</main>
</div>
