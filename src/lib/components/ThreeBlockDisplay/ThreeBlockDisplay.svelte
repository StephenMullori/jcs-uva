<script lang="ts">
	export let data;
	const arr = [1, 2, 3];
</script>

<section>
	{#each arr as arrItem}
		<article></article>
	{/each}
</section>
