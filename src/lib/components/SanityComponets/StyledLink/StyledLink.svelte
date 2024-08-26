<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	export let portableText: MarkComponentProps;

	$: ({ value } = portableText);
	$: href = value?.href || value?.url || value?.link || value?.value;
</script>

{#if typeof href === 'string'}
	<a {href} class="text-blue-600 underline underline-offset-2"><slot /></a>
{:else}
	<slot />
{/if}
