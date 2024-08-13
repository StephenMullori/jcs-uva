<script>
	import FooterBar from '$lib/components/FooterBar/FooterBar.svelte';
	import HeaderBarReader from '$lib/components/HeaderBarReader/HeaderBarReader.svelte';
	import '../app.css';
</script>

<HeaderBarReader />
<slot></slot>
<FooterBar />
