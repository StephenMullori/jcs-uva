<script lang="ts">
	import '../app.css';
</script>

<nav class="flex h-20 bg-black p-3">
	<div class="flex items-center justify-between gap-4">
		<img src="/images/logo.jpeg" alt="cheating" class="h-12 w-12" />

		<h1>Journal of Computer Science At UVA</h1>
		<a href="/#">News</a>
		<span>|</span>
		<a href="/#">Research</a>
		<span>|</span>
		<a href="/#">About us</a>
	</div>

	<div class="bg-"></div>
</nav>

<slot></slot>

<footer class="flex h-16 bg-black">
	<h1>Test footer</h1>
</footer>

<style>
	nav {
		color: white;
	}
</style>
