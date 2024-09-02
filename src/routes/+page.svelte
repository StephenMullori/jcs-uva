<script lang="ts">
	import FeatureDisplay from '$lib/components/FeatureDisplay/FeatureDisplay.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import TextDisplay from '$lib/components/TextDisplay/TextDisplay.svelte';
	import BlockDisplay from '$lib/components/BlockDisplay/BlockDisplay.svelte';
	import type { PageData } from './$types';
	import PictureBlock from '$lib/components/PictureBlock/PictureBlock.svelte';

	export let data: PageData;
	const research = data.homePage.research;
</script>

<main class="m-auto grid max-w-screen-xl items-start gap-4 py-16 pr-2 lg:grid-cols-2">
	<div class="max-w-lg">
		<FeatureDisplay article={research[1]} />
		<BlockDisplay arr={[research[0], research[2]]} />
		<TextDisplay count={[0, 1, 2]} />
	</div>

	<div class="max-w-lg">
		<FeatureDisplay />
		<PictureBlock count={[0, 1]} />

		<BlockDisplay count={[0, 1]} />
	</div>
</main>
