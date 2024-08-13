<script lang="ts">
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>

<div class="m-auto w-2/3">
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img src={articleDetails.mainImage} alt="Main image" class="main-image" />

	<h1 class="title">{articleDetails.title}</h1>
	<p class="meta">By: {articleDetails.author}</p>
	<p class="meta"><i>Published {articleDetails.date}</i></p>

	<div class="content">
		{@html articleDetails.content}
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img src={articleDetails.embeddedImage} alt="Embedded image" class="embedded-image" />
	</div>
</div>
