<script lang="ts">
	import FooterBar from '$lib/components/FooterBar/FooterBar.svelte';
	import HeaderBarReader from '$lib/components/HeaderBarReader/HeaderBarReader.svelte';
	import type { PageData } from '../../$types';

	let { data }: { data: PageData } = $props();
	let articleDetails: {
		title: string;
		author: string;
		date: string;
		mainImage: string;
		content: string;
		embeddedImage: string;
	} = {
		title: 'Title: Lorem Ipsum Dolor',
		author: 'John Doe',
		date: '7/10/2024',
		mainImage: 'https://picsum.photos/300/200',
		content:
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
		embeddedImage: 'https://picsum.photos/300/200'
	};
</script>

<HeaderBarReader />
<div class="article-container">
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

<FooterBar />

<style>
	.article-container {
		max-width: 1000px;
		margin: 20px auto;
		padding: 20px;
		font-family: Arial, sans-serif;
		line-height: 1.6;
	}

	.main-image {
		width: 100%;
		height: auto;
	}

	.title {
		font-size: 2.5rem;
		margin: 20px 0;
	}

	.meta {
		color: #555;
	}

	.content {
		margin: 20px 0;
	}

	.embedded-image {
		width: 100%;
		height: auto;
		margin: 20px 0;
	}
</style>
