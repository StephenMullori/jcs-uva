<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';
	import { client } from '$lib/sanity/client';
	import imageUrlBuilder from '@sanity/image-url';
	import type { WriterBlurb } from '$lib/sanity/queries';
	import WriterInfoBlurb from '$lib/components/WriterInfoBlurb/WriterInfoBlurb.svelte';

	export let data: PageData;
	const builder = imageUrlBuilder(client);

	const { title, publishedAt, body, bannerImage, author, editor } = data.article;
	const publishingDate = new Date(publishedAt);
</script>

<div class="m-auto w-2/3 pt-12">
	<header class="m-auto max-w-5xl">
		<h1 class=" mb-4 text-5xl font-bold">{title}</h1>
		<WriterInfoBlurb writer={author} position={'author'} />
		<WriterInfoBlurb writer={editor} position={'editor'} />

		<div class="mb-2 flex gap-2 text-lg">
			<p>published:</p>
			<time datetime={publishedAt}>{publishingDate.toDateString()}</time>
		</div>
	</header>

	<div class="m-auto w-2/3 max-w-2xl">
		<PortableText value={body} components={{}} />
	</div>

	<!-- <div class="content">
		{@html articleDetails.content}
		<img src={articleDetails.embeddedImage} alt="Embedded image" class="embedded-image" />
	</div> -->
</div>
