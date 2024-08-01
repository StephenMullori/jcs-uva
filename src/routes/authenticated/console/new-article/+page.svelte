<script lang="ts">
	import NewArticleForm from '$lib/forms/NewArticle/NewArticleForm.svelte';
	import type { PageData } from './$types';
	const { data }: { data: PageData } = $props();
</script>

<NewArticleForm data={data.form} />
