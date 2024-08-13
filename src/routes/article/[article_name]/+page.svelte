<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import { client } from '$lib/sanity/client';
	import imageUrlBuilder from '@sanity/image-url';
	import type { Image } from '@sanity/types';
	import type { WriterBlurb } from '$lib/sanity/queries';

	let { data }: { data: PageData } = $props();
	const { bannerImage, body, title, author, editor } = data.article;

	const builder = imageUrlBuilder(client);
	function urlFor(source: Image) {
		return builder.image(source);
	}
</script>

{#snippet writer(writer: WriterBlurb | null, position: string)}
	{#if writer !== null}
		<div class="flex gap-2">
			{#if position === 'author'}
				<p>Writen by</p>
			{:else if position === 'editor'}
				<p>Edited by</p>
			{/if}
			{#if writer.image !== null}
				<img
					src={urlFor(writer.image)}
					alt="Picture of {writer.name}"
					class="max-w-12 rounded-full"
				/>
			{/if}
			<p>{writer.name}</p>
		</div>
	{/if}
{/snippet}

<div class="m-auto w-2/3 pt-12">
	<header class="m-auto max-w-5xl">
		<h1 class=" mb-4 text-5xl font-bold">{title}</h1>
		{@render writer(author, 'author')}
		{@render writer(editor, 'editor')}
		<img src={urlFor(bannerImage)} alt="Main image" class=" mb-4 max-w-5xl object-cover" />
	</header>

	<div class="m-auto w-2/3 max-w-2xl">
		<PortableText value={body} components={{}} />
	</div>

	<!-- <div class="content">
		{@html articleDetails.content}
		<img src={articleDetails.embeddedImage} alt="Embedded image" class="embedded-image" />
	</div> -->
</div>
