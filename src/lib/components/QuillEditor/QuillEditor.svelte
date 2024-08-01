<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	import Quill from 'quill';

	let value = $state('');
	let placeholder = 'Write something...';

	let element: HTMLElement;

	onMount(() => {
		const quill = new Quill('#editor', {
			theme: 'snow',
			placeholder: placeholder,
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

		if (quill) {
			quill.on('text-change', () => {
				value.set(quill.value!.root.innerHTML);
				dispatch('change', { value: value.value });
			});

			if (value.value) {
				quill.value.root.innerHTML = value.value;
			}
		}

		return () => {
			quill.value?.off('text-change');
		};
	});

	effect(() => {
		if (quill.value && value.value !== quill.value.root.innerHTML) {
			quill.value.root.innerHTML = value.value;
		}
	});
</script>

<div bind:this={element}></div>
