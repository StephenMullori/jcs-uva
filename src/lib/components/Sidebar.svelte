<script lang="ts">
	// let { articles } = $props();
	// articles = string[];
	// for(let i = 0; i < 7; i++){
	//     articles.push()
	// }
</script>

<div class="border-x-3 border-r-3 flex flex-col border-gray-500 p-2">
	{#each [0, 1, 2, 3] as article}
		<!-- some kind of article block goes here -->
	{/each}
</div>
