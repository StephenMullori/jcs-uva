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
	<div class="m-auto max-w-screen-sm self-end px-4 pb-4 pt-4">
		<div class="flex justify-between gap-4">
			{#each count as arrItem}
				<article class="max-w-52">
					<a href={noInput.type}>
						<img
							src={noInput.BannerImage}
							alt=""
							class="aspect-picture m-auto w-full object-cover"
						/>
						<div class="">
							<p class=" text-lg hover:underline">{noInput.title}</p>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
{:else}
	<div class="m-auto max-w-screen-sm self-end px-4 pb-4 pt-4">
		<div class="flex justify-evenly gap-4">
			{#each arr as arrItem}
				<article class="max-w-52">
					<a href={createURL(arrItem._type, arrItem.slug)}>
						<img
							src={urlFor(arrItem.bannerImage).url()}
							alt=""
							class="aspect-picture m-auto w-full object-cover"
						/>
						<div class="">
							<p class=" text-lg hover:underline">{arrItem.title}</p>
						</div>
					</a>
				</article>
			{/each}
		</div>
	</div>
{/if}
