<script lang="ts">
	import FooterBar from '$lib/components/FooterBar/FooterBar.svelte';
	import HeaderBarConsole from '$lib/components/HeaderBarConsole/HeaderBarConsole.svelte';
	import HeaderBarReader from '$lib/components/HeaderBarReader/HeaderBarReader.svelte';
	import type { Snippet } from 'svelte';
	import type { LayoutData } from '../$types';
	let { data, children }: { data: LayoutData; children: Snippet } = $props();
</script>

<HeaderBarConsole userEmail={data.session?.user.email} />
{@render children()}
<FooterBar />
