<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	interface Props {
		portableText: MarkComponentProps;
		children?: import('svelte').Snippet;
	}

	let { portableText, children }: Props = $props();

	let { value } = $derived(portableText);
	let href = $derived(value?.href || value?.url || value?.link || value?.value);
</script>

{#if typeof href === 'string'}
	<a {href} class="text-blue-600 underline underline-offset-2">{@render children?.()}</a>
{:else}
	{@render children?.()}
{/if}
