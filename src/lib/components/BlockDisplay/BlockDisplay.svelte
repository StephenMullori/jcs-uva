<script lang="ts">
	export const arr = [1, 2, 3];
</script>

<div class="m-auto max-w-screen-sm px-4 pb-4 pt-2">
	<hr class="mb-2 w-full border-[#3e3e3e]" />
	{#each arr as arrItem}
		<a href="/#">
			<article class="mb-2 flex">
				<img
					src="https://picsum.photos/100"
					alt=""
					class="mr-4 w-full max-w-40 object-cover sm:aspect-video"
				/>
				<div class="">
					<p class="hover:underline">
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
						consectetur et suscipit adipisci. Suscipit soluta esse incidunt
					</p>
				</div>
			</article>
		</a>
		<hr class="mb-2 w-full border-[#3e3e3e]" />
	{/each}
</div>
