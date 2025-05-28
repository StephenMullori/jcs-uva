<script lang="ts">
	import FeatureDisplay from '$lib/components/FeatureDisplay/FeatureDisplay.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import TextDisplay from '$lib/components/TextDisplay/TextDisplay.svelte';
	import BlockDisplay from '$lib/components/BlockDisplay/BlockDisplay.svelte';
	import PictureBlock from '$lib/components/PictureBlock/PictureBlock.svelte';
	import type { PageProps } from './$types';
	import type { DisplayInfo } from '$lib/sanity/queries';

	let { data }: PageProps = $props();
	const research = data.homePage.research;
	const news = data.homePage.news;
	let all_articles: DisplayInfo[] = [...news, ...research];
</script>

<main class="m-auto grid max-w-screen-xl items-start gap-4 py-16 pr-2 lg:grid-cols-2">
	<div class="max-w-">
		<h3 class="px-4 text-4xl font-semibold">UVA Comunity Today</h3>
		<hr />
		<FeatureDisplay />
		<div class="h-[2vh]"></div>
		<BlockDisplay arr={{}} count={[0, 1, 2, 3]} />
	</div>

	<div class="max-w-lg">
		<h3 class="px-4 text-4xl font-semibold">By JCS</h3>
		<hr />
		<FeatureDisplay article={all_articles[0]} />
		<PictureBlock arr={[all_articles[1], all_articles[2]]} />

		<BlockDisplay arr={[all_articles[3], all_articles[4]]} count={[0, 1]} />
	</div>
</main>
