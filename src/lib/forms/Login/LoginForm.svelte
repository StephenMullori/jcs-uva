<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Field, Control, Label, Description, FieldErrors } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { SignInFormSchema } from './SignInFormSchema';
	import { type SuperValidated, superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	let { data }: { data: SuperValidated<SignInFormSchema> } = $props();

	const form = superForm(data, {
		validators: zodClient(SignInFormSchema)
	});

	const { form: formData, enhance } = form;
</script>

<form
	method="POST"
	use:enhance
	class="m-auto w-2/3 rounded-md border border-neutral-500 bg-neutral-200 p-6"
>
	<Field {form} name="email">
		<Control let:attrs>
			<Label>Email</Label>
			<Input {...attrs} type="email" placeholder="Email" bind:value={$formData.email} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>
	<Field {form} name="password">
		<Control let:attrs>
			<Label>Password</Label>
			<Input {...attrs} type="password" placeholder="Password" bind:value={$formData.password} />
		</Control>
		<Description />
		<FieldErrors />
	</Field>
	<Button type="submit" class="m-auto">Submit</Button>
</form>
