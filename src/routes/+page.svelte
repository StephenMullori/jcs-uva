<script lang="ts">
	import FooterBar from '$lib/components/FooterBar/FooterBar.svelte';
	import HeaderBarReader from '$lib/components/HeaderBarReader/HeaderBarReader.svelte';
	import Sidebar from '$lib/components/SideBar/Sidebar.svelte';
	import type { PageData } from './$types';

	const { data }: { data: PageData } = $props();
</script>

{#snippet featureBlock(articles)}
	<div
		class="flex flex-col items-start justify-start gap-4 border-[#ddd] bg-[#ecf0f1] px-2 pb-2 pt-8"
	>
		<article class="w-full">
			<img src="https://picsum.photos/300/200" alt="" class="mr-auto w-full max-w-md" />
			<h2>Title</h2>
		</article>
		<hr class="w-full border-[#3e3e3e]" />
		<article class="flex">
			<img src="https://picsum.photos/100" alt="" />
			<div class="">
				<h3>title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
					consectetur et suscipit adipisci. Suscipit soluta esse incidunt
				</p>
			</div>
		</article>
		<article class="flex">
			<img src="https://picsum.photos/100" alt="" />
			<div class="">
				<h3>title</h3>
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
					consectetur et suscipit adipisci. Suscipit soluta esse incidunt
				</p>
			</div>
		</article>
	</div>
{/snippet}

<HeaderBarReader />

<main class="grid grid-cols-[200px_minmax(300px,_1fr)_minmax(300px,_1fr)] gap-4 py-2 pr-2">
	<div class="">
		<Sidebar articles={[]} />
	</div>
	<div class="bg-green-400">{@render featureBlock({})}</div>
	<div class="bg-red-400">{@render featureBlock({})}</div>
</main>

<FooterBar />
