<script lang="ts">
	export let data;
	const arr = [1, 2, 3, 4, 5, 6];
</script>

<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
	<hr class="mb-2 w-full border-[#3e3e3e]" />
	{#each arr as arrItem}
		<article class="mb-2 flex">
			<div class="">
				<p>
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
					consectetur et suscipit adipisci. Suscipit soluta esse incidunt
				</p>
			</div>
		</article>
		<hr class="mb-2 w-full border-[#3e3e3e]" />
	{/each}
</div>
