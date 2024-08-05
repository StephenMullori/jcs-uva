<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import type { Writable } from 'svelte/store';
	import type { SuperValidated } from 'sveltekit-superforms';
	import type { AnyZodObject } from 'zod';

	let { value = $bindable(), errors }: { value: any; errors: string[] | undefined } = $props();

	let quill: Quill = $state();
	let editorElement: HTMLElement;

	onMount(async () => {
		if (browser) {
			const Quill = (await import('quill')).default;
			await import('quill/dist/quill.snow.css');

			quill = new Quill(editorElement, {
				theme: 'snow',
				modules: {
					toolbar: [
						['bold', 'italic', 'underline', 'strike'],
						['blockquote', 'code-block'],
						[{ header: 1 }, { header: 2 }],
						[{ list: 'ordered' }, { list: 'bullet' }],
						[{ script: 'sub' }, { script: 'super' }],
						[{ indent: '-1' }, { indent: '+1' }],
						[{ direction: 'rtl' }],
						[{ size: ['small', false, 'large', 'huge'] }],
						[{ header: [1, 2, 3, 4, 5, 6, false] }],
						[{ color: [] }, { background: [] }],
						[{ font: [] }],
						[{ align: [] }],
						['clean']
					]
				}
			});

			// If there's existing content, set it
			// if (value) {
			//   try {
			// 	const contentDelta = JSON.parse(value);
			// 	quill.setContents(contentDelta);
			//   } catch (e) {
			// 	console.error("Failed to parse existing content", e);
			//   }
			// }

			quill.on('text-change', () => {
				const delta = quill.getContents();
				value = JSON.stringify(delta);
			});
		}
	});
</script>

<div bind:this={editorElement}></div>

{#if errors?.length > 0}
	<div class="error">{errors}</div>
{/if}
