<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import { client } from '$lib/sanity/client';
	import imageUrlBuilder from '@sanity/image-url';
	import type { WriterBlurb } from '$lib/sanity/queries';
	import WriterInfoBlurb from '$lib/components/WriterInfoBlurb/WriterInfoBlurb.svelte';
	import { FileText } from 'lucide-svelte';

	export let data: PageData;

	const { title, publishedAt, abstract, authors, editor, pdfFile } = data.article;
	const publishingDate = new Date(publishedAt);

	// const { title, publishedAt, body, bannerImage, author, editor } = data.article;
	// const publishingDate = new Date(publishedAt);
</script>

<div class="m-auto w-2/3 max-w-2xl pt-12">
	<header class="m-auto">
		<h1 class=" mb-4 text-5xl font-bold">{title}</h1>
		<div class="flex gap-3">
			{#if authors !== null}
				{#each authors as author}
					<span class="h-fit pr-3 text-lg font-semibold">{author.name}</span>
				{/each}
			{/if}
		</div>
		<WriterInfoBlurb writer={editor} position={'editor'} />

		<div class="mb-2 flex gap-2 text-lg">
			<p>published:</p>
			<time datetime={publishedAt}>{publishingDate.toDateString()}</time>
		</div>
	</header>

	<div class="m-auto mb-12">
		<h3 class="text-2xl font-semibold">Abstract</h3>
		<PortableText value={abstract} components={{}} />
	</div>

	<div class=" mb-12 w-min rounded-sm border border-black p-8">
		<div class="flex gap-1 text-nowrap">
			<FileText />
			<p>Full article PDF</p>
			<a href={pdfFile.asset.url} class="text-blue-500 hover:underline">here</a>
		</div>
	</div>
	<div class="py-64"></div>
</div>
