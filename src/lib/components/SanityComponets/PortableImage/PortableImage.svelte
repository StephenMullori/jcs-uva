<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';
	import { urlFor } from '$lib/sanity/image';

	export let portableText: MarkComponentProps;
	const { value } = portableText;
	const { asset } = value;
</script>

<figure class="custom-image">
	<img src={urlFor(asset).url()} alt="placeholder" />
</figure>

<style>
	.custom-image {
		margin: 1rem 0;
	}
	img {
		max-width: 100%;
		height: auto;
	}
	figcaption {
		font-style: italic;
		text-align: center;
	}
</style>
