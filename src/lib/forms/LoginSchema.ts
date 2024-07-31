import { z } from 'zod';

const LoginSchema = z.object({
	email: z.string().default('Hello world!'),
	password: z.string()
});

export { LoginSchema };
