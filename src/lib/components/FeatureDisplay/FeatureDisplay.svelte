<script lang="ts">
	import type { FeatureDisplayInfo } from './FeatureDisplayInfo';
	import { urlFor } from '$lib/sanity/image';
	import { createURL } from '$lib/utilFuncs';
	const noInput = {
		title: 'Your Article Here',
		BannerImage: '/images/logo.jpeg',
		blurb:
			'Contact JCS@UVA to have your article appear in the journal. See the about page for how to conatact us.',
		type: '/#'
	};

	export let article: any = {};

	let defalt = false;
	if (JSON.stringify(article) === JSON.stringify({})) {
		defalt = true;
	}
</script>

{#if defalt}
	<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
		<article class="m-auto mb-5 w-full">
			<a href={noInput.type}>
				<!-- <img src="https://picsum.photos/300/200" alt="" class=" w-full object-cover" /> -->
				<img src={noInput.BannerImage} alt="Main image" class="mb-4 max-h-80 w-full object-cover" />
				<h2 class="mb-2 line-clamp-2 text-4xl font-bold hover:underline">Title</h2></a
			>
		</article>
	</div>
{:else}
	<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
		<article class="m-auto mb-5 w-full">
			<a href={createURL(article._type, article.slug)}>
				<!-- <img src="https://picsum.photos/300/200" alt="" class=" w-full object-cover" /> -->
				<img
					src={urlFor(article.bannerImage).url()}
					alt="Main image"
					class="mb-4 w-full object-cover"
				/>
				<h2 class="mb-2 line-clamp-2 text-4xl font-bold hover:underline">{article.title}</h2></a
			>
		</article>
	</div>
{/if}
