<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Field, Control, Label, Description, FieldErrors } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { NewArticleSchema } from './NewArticleSchema';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';
	let { data }: { data: SuperValidated<NewArticleSchema> } = $props();
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	const form = superForm(data, {
		validators: zodClient(NewArticleSchema)
	});
	const { form: formData, enhance } = form;

	const toolbarOptions = [
		['bold', 'italic', 'underline', 'strike'], // toggled buttons
		['blockquote', 'code-block'],
		['link', 'image', 'video', 'formula'],

		[{ header: 1 }, { header: 2 }], // custom button values
		[{ list: 'ordered' }, { list: 'bullet' }, { list: 'check' }],
		[{ script: 'sub' }, { script: 'super' }], // superscript/subscript
		[{ indent: '-1' }, { indent: '+1' }], // outdent/indent
		[{ direction: 'rtl' }], // text direction

		[{ size: ['small', false, 'large', 'huge'] }], // custom dropdown
		[{ header: [1, 2, 3, 4, 5, 6, false] }],

		[{ color: [] }, { background: [] }], // dropdown with defaults from theme
		[{ font: [] }],
		[{ align: [] }],

		['clean'] // remove formatting button
	];

	let quill;
	onMount(async () => {
		if (browser) {
			await import('quill/dist/quill.snow.css');
			const Quill = (await import('quill')).default;
			const quill = new Quill('#editor', {
				modules: {
					toolbar: toolbarOptions
				},
				theme: 'snow'
			});
		}
	});
</script>

<form method="POST" use:enhance class="m-auto w-2/3 rounded-md p-6">
	<Field {form} name="title">
		<Control let:attrs>
			<Label>email</Label>
			<Input {...attrs} type="text" placeholder="Title" bind:value={$formData.title} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>
	<Field {form} name="author">
		<Control let:attrs>
			<Label>Author</Label>
			<Input {...attrs} type="text" placeholder="John Doe" bind:value={$formData.author} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>
	<Field {form} name="editor">
		<Control let:attrs>
			<Label>Editor</Label>
			<Input {...attrs} type="text" placeholder="Jane Doe" bind:value={$formData.editor} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>

	{#if browser}
		<h3>Article content</h3>
		<div id="editor" class=""></div>
	{/if}

	<Field {form} name="content" class="hidden ">
		<Control let:attrs>
			<Label>content</Label>
			<Input {...attrs} type="text" placeholder="John Doe" bind:value={$formData.author} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>
	<Field {form} name="category">
		<Control let:attrs>
			<Label>Category</Label>
			<Input {...attrs} type="text" placeholder="Research" bind:value={$formData.category} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>
	<Button type="submit" class="m-auto">Submit</Button>
</form>

<!-- <style>
	@import quill.core.css;
</style> -->
