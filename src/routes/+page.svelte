<script lang="ts">
	import FeatureDisplay from '$lib/components/FeatureDisplay/FeatureDisplay.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="m-auto grid max-w-screen-2xl gap-4 py-16 pr-2 xl:grid-cols-3">
	<FeatureDisplay
		articles={{
			blockTitle: 'News'
		}}
	/>
	<FeatureDisplay
		articles={{
			blockTitle: 'News'
		}}
	/>
	<FeatureDisplay
		articles={{
			blockTitle: 'News'
		}}
	/>
</main>
