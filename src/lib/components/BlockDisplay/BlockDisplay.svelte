<script lang="ts">
	import { urlFor } from '$lib/sanity/image';
	import type { DisplayInfo } from '$lib/sanity/queries';
	import { createURL } from '$lib/utilFuncs';
	const noInput = {
		title: 'Your Article Here',
		BannerImage: '/images/logo.jpeg',
		blurb:
			'Contact JCS@UVA to have your article appear in the journal. See the about page for how to conatact us.',
		type: '/#'
	};

	export let arr: any = {};
	export let count: number[] = [0];
	let defalt = false;
	if (JSON.stringify(arr) === JSON.stringify({})) {
		defalt = true;
	}
</script>

{#if defalt}
	<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
		<hr class="mb-2 w-full border-[#3e3e3e]" />
		{#each count as arrItem}
			<a href="/#">
				<article class="mb-2 flex">
					<img
						src={noInput.BannerImage}
						alt=""
						class="mr-4 w-full max-w-40 object-cover sm:aspect-video"
					/>
					<div class="">
						<p class="line-clamp-3 hover:underline">
							{noInput.blurb}
						</p>
					</div>
				</article>
			</a>
			<hr class="mb-2 w-full border-[#3e3e3e]" />
		{/each}
	</div>
{:else}
	<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
		<hr class="mb-2 w-full border-[#3e3e3e]" />
		{#each arr as arrItem}
			<a href={createURL(arrItem._type, arrItem.slug)}>
				<article class="mb-2 flex">
					<img
						src={urlFor(arrItem.bannerImage).url()}
						alt=""
						class="mr-4 w-full max-w-40 object-cover sm:aspect-video"
					/>
					<div class="">
						<p class="line-clamp-3 hover:underline">
							{arrItem.blurb}
						</p>
					</div>
				</article>
			</a>
			<hr class="mb-2 w-full border-[#3e3e3e]" />
		{/each}
	</div>
{/if}
