<script lang="ts">
	import type { PageData } from './$types';
	import { PortableText } from '@portabletext/svelte';

	let { data }: { data: PageData } = $props();
	const { article } = data;
</script>

<div class="m-auto w-2/3">
	<!-- svelte-ignore a11y_img_redundant_alt -->
	<img src={null} alt="Main image" class="main-image" />
	<PortableText value={article.body} components={{}} />

	<!-- <div class="content">
		{@html articleDetails.content}
		<img src={articleDetails.embeddedImage} alt="Embedded image" class="embedded-image" />
	</div> -->
</div>
