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
	import QuillEditor from '$lib/components/QuillEditor/QuillEditor.svelte';

	const form = superForm(data, {
		validators: zodClient(NewArticleSchema)
	});
	const { form: formData, enhance, errors } = form;
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

	<QuillEditor bind:value={$formData.content} errors={$errors.content} />

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
