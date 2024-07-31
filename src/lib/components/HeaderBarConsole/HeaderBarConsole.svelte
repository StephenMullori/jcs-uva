<script lang="ts">
	import { CircleUserRound } from 'lucide-svelte';
	import type { PageData } from '../../../routes/$types';

	let { userEmail }: { userEmail: string | undefined } = $props();
	if (userEmail === undefined) {
		userEmail = 'Not Logged In';
	}
</script>

<nav class="flex h-20 items-center justify-between bg-black p-3 text-white">
	<div class="flex items-center justify-between gap-4">
		<img src="/images/logo.jpeg" alt="logo" class="h-12 w-12" />
		<h1>Journal of Computer Science At UVA</h1>
	</div>
	<div class="flex"></div>

	<div class="flex gap-4">
		<h3 class="font-semibold">{userEmail}</h3>
		<CircleUserRound />
	</div>
</nav>
