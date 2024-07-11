<script lang="ts">
	let { articles }: { articles: { title: string; image: string; text: string }[] } = $props();

	articles = [
		{
			title: 'lorem',
			image: '/#',
			text: 'article info'
		},
		{
			title: 'lorem',
			image: '/#',
			text: 'article info'
		},
		{
			title: 'lorem',
			image: '/#',
			text: 'article info'
		},
		{
			title: 'lorem',
			image: '/#',
			text: 'article info'
		},
		{
			title: 'lorem',
			image: '/#',
			text: 'article info'
		},
		{
			title: 'lorem',
			image: '/#',
			text: 'article info'
		}
	];
</script>

<div class="border-r-3 flex flex-col rounded-r-md border border-[#ddd] bg-[#ecf0f1] p-2">
	{#each articles as block}
		<article class="mb-4 flex">
			<!-- <img src="" alt=""> -->
			<div class="mr-2 bg-green-200 p-5"></div>
			<div class="flex flex-col">
				<h4>{block.title}</h4>
				<p>{block.text}</p>
			</div>
		</article>
	{/each}
</div>
