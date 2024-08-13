<script lang="ts">
	import type { WriterBlurb } from '$lib/sanity/queries';
	import { client } from '$lib/sanity/client';
	import imageUrlBuilder from '@sanity/image-url';
	import { CircleUser } from 'lucide-svelte';

	export let writer: WriterBlurb | null;
	export let position: string;
	const builder = imageUrlBuilder(client);

	function urlFor(source: any) {
		return builder.image(source);
	}
</script>

{#if writer !== null}
	<div class="flex items-center gap-2 py-2 text-lg">
		{#if position === 'author'}
			<p>Writen by</p>
		{:else if position === 'editor'}
			<p>Edited by</p>
		{/if}
		{#if writer.image !== null}
			<img src={urlFor(writer.image)} alt="Picture of {writer.name}" class="h-8 w-8 rounded-full" />
		{:else}
			<CircleUser />
		{/if}
		<p>{writer.name}</p>
	</div>
{/if}
