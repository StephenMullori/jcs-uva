<script lang="ts">
	import QuillEditor from '$lib/components/QuillEditor/QuillEditor.svelte';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();
</script>
