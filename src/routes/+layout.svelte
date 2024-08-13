<script lang="ts">
	import FooterBar from '$lib/components/FooterBar/FooterBar.svelte';
	import HeaderBarReader from '$lib/components/HeaderBarReader/HeaderBarReader.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<HeaderBarReader />
{@render children()}
<FooterBar />
