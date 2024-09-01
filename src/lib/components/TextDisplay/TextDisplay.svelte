<script lang="ts">
	export let arr;
</script>

<div class="m-auto max-w-screen-sm self-end px-4 pb-4 pt-2">
	<hr class="mb-2 w-full border-[#3e3e3e]" />
	{#each arr as arrItem}
		<article class="mb-2 flex">
			<div class="">
				<a href="/#" class="hover:underline">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
					consectetur et suscipit adipisci. Suscipit soluta esse incidunt
				</a>
			</div>
		</article>
		<hr class="mb-2 w-full border-[#3e3e3e]" />
	{/each}
</div>
