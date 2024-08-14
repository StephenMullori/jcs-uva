<script lang="ts">
	import type { FeatureDisplayInfo } from './FeatureDisplayInfo';

	export let articles: FeatureDisplayInfo;
</script>

<div
	class="flex flex-col items-start justify-start gap-4 border-[#ddd] bg-[#ecf0f1] px-4 pb-4 pt-8"
>
	<h1 class=" m-auto text-center text-3xl font-semibold">{articles.blockTitle}</h1>
	<article class="m-auto w-full">
		<img src="https://picsum.photos/300/200" alt="" class=" w-full object-cover" />
		<h2>Title</h2>
	</article>
	<hr class="w-full border-[#3e3e3e]" />
	<article class="flex">
		<img src="https://picsum.photos/100" alt="" class="mr-4" />
		<div class="">
			<h3>title</h3>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
				consectetur et suscipit adipisci. Suscipit soluta esse incidunt
			</p>
		</div>
	</article>
	<article class="flex">
		<img src="https://picsum.photos/100" alt="" class="mr-4" />
		<div class="">
			<h3>title</h3>
			<p>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta illo perferendis
				consectetur et suscipit adipisci. Suscipit soluta esse incidunt
			</p>
		</div>
	</article>
</div>
