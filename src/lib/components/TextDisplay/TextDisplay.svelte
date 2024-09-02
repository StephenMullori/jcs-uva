<script lang="ts">
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
			<article class="mb-2 h-12">
				<a href={noInput.type} class=" line-clamp-3 hover:underline">
					{noInput.blurb}
				</a>
			</article>
			<hr class="mb-2 w-full border-[#3e3e3e]" />
		{/each}
	</div>
{:else}
	<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
		<hr class="mb-2 w-full border-[#3e3e3e]" />
		{#each arr as arrItem}
			<article class="mb-2 h-12">
				<a href={createURL(arrItem._type, arrItem.slug)} class=" line-clamp-2 hover:underline">
					{arrItem.blurb}
				</a>
			</article>
			<hr class="mb-2 w-full border-[#3e3e3e]" />
		{/each}
	</div>
{/if}
