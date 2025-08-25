<script lang="ts">
	import FeatureDisplay from '$lib/components/FeatureDisplay/FeatureDisplay.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import TextDisplay from '$lib/components/TextDisplay/TextDisplay.svelte';
	import BlockDisplay from '$lib/components/BlockDisplay/BlockDisplay.svelte';
	import PictureBlock from '$lib/components/PictureBlock/PictureBlock.svelte';
	import type { PageProps } from './$types';
	import type { DisplayInfo } from '$lib/sanity/queries';

	let { data }: PageProps = $props();
	const { homePage } = data;
</script>

<main class="m-auto max-w-screen-xl pt-16">
	<h2 class="text-3xl font-semibold">By JCS@UVA</h2>
	<div class="m-auto grid max-w-screen-xl items-start gap-4 py-4 lg:grid-cols-2">
		<div class="max-w-lg">
			<FeatureDisplay article={homePage[0]} />
			<div class="h-[2vh]"></div>
			<BlockDisplay arr={homePage.slice(1, 4)} count={[0, 1, 2]} />
		</div>

		<div class="max-w-lg">
			<FeatureDisplay article={homePage[4]} />
			<PictureBlock arr={[homePage[5], homePage[6]]} />

			<BlockDisplay arr={[homePage[7]]} count={[0]} />
		</div>
	</div>
</main>
