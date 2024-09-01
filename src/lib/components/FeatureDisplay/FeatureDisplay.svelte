<script lang="ts">
	import type { FeatureDisplayInfo } from './FeatureDisplayInfo';
	import { urlFor } from '$lib/sanity/image';
	export let articles: FeatureDisplayInfo;
</script>

<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
	<article class="m-auto mb-5 w-full">
		<!-- <img src="https://picsum.photos/300/200" alt="" class=" w-full object-cover" /> -->
		<img src="https://picsum.photos/300/200" alt="Main image" class="mb-4 w-full object-cover" />
		<h2 class="mb-2 text-4xl font-bold">Title</h2>
	</article>
</div>
