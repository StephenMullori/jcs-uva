<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import {
		DefaultBlock,
		DefaultList,
		DefaultListItem,
		DefaultMark,
		PortableText
	} from '@portabletext/svelte';
	import WriterInfoBlurb from '$lib/components/WriterInfoBlurb/WriterInfoBlurb.svelte';
	import StyledLink from '$lib/components/SanityComponets/StyledLink/StyledLink.svelte';
	import PortableImage from '$lib/components/SanityComponets/PortableImage/PortableImage.svelte';
	import { urlFor } from '$lib/sanity/image';

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

		<!-- svelte-ignore a11y-img-redundant-alt -->
		<img
			src={urlFor(bannerImage).url()}
			alt="Main image"
			class="mb-4 w-full max-w-5xl object-cover"
		/>
	</header>

	<div class="m-auto w-2/3 max-w-2xl">
		<PortableText
			value={body}
			components={{
				types: {
					image: PortableImage
				},
				marks: {
					em: DefaultMark,
					strong: DefaultMark,
					link: StyledLink
				},
				block: {
					normal: DefaultBlock,
					blockquote: DefaultBlock,
					h1: DefaultBlock,
					h2: DefaultBlock,
					h3: DefaultBlock
				},
				list: {
					bullet: DefaultList
				},
				listItem: {
					bullet: DefaultListItem
				}
			}}
		/>
	</div>

	<!-- <div class="content">
		{@html articleDetails.content}
		<img src={articleDetails.embeddedImage} alt="Embedded image" class="embedded-image" />
	</div> -->
</div>
