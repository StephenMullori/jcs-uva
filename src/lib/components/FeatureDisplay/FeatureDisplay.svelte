<script lang="ts">
	import type { FeatureDisplayInfo } from './FeatureDisplayInfo';
	import { urlFor } from '$lib/sanity/image';
	export let articles: FeatureDisplayInfo;
	const arr = [1, 2, 3];
</script>

<div class="m-auto max-w-screen-sm px-4 pb-4 pt-8">
	<article class="m-auto mb-5 w-full">
		<h2 class="mb-2 text-center text-4xl font-bold">Title</h2>
		<!-- <img src="https://picsum.photos/300/200" alt="" class=" w-full object-cover" /> -->
		<img src="https://picsum.photos/300/200" alt="Main image" class="mb-4 w-full object-cover" />
	</article>

	<hr class="mb-5 w-full border-[#3e3e3e]" />
	<div class="flex flex-col gap-4">
		{#each arr as arrItem}
			<article class="mb-4 flex">
				<img
					src="https://picsum.photos/100"
					alt=""
					class="mr-4 w-full max-w-40 object-cover sm:aspect-video"
				/>
				<div class="">
					<h3 class="text-xl font-semibold">title</h3>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
						consectetur et suscipit adipisci. Suscipit soluta esse incidunt
					</p>
				</div>
			</article>
		{/each}
	</div>
</div>
