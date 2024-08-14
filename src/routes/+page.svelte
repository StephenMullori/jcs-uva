<script lang="ts">
	import FeatureDisplay from '$lib/components/FeatureDisplay/FeatureDisplay.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="grid grid-cols-[200px_minmax(300px,_1fr)_minmax(300px,_1fr)] gap-4 py-16 pr-2">
	<div class="">
		<!-- <Sidebar articles={[]} /> -->
	</div>
	<FeatureDisplay
		articles={{
			blockTitle: 'News'
		}}
	/>
	<FeatureDisplay
		articles={{
			blockTitle: 'Research'
		}}
	/>
</main>
