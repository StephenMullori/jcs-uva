<script lang="ts">
	import FeatureDisplay from '$lib/components/FeatureDisplay/FeatureDisplay.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import TextDisplay from '$lib/components/TextDisplay/TextDisplay.svelte';
	import BlockDisplay from '$lib/components/BlockDisplay/BlockDisplay.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="m-auto grid max-w-screen-2xl items-end gap-4 py-16 pr-2 xl:grid-cols-3">
	<div class="">
		<FeatureDisplay
			articles={{
				blockTitle: 'News'
			}}
		/>
		<BlockDisplay arr={[1, 2, 3]} />
	</div>
	<BlockDisplay arr={[1, 2, 3, 4, 5]} />
	<TextDisplay data={{}} />
</main>
