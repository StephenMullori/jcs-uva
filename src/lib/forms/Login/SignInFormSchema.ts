import * as z from 'zod';
export const SignInFormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8)
});

export type SignInFormSchema = z.infer<typeof SignInFormSchema>;
