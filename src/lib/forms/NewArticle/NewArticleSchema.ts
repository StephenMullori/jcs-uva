import { z } from 'zod';

export const NewArticleSchema = z.object({
	title: z.string(),
	author: z.string(),
	editor: z.string(),
	content: z.any().array(),
	category: z.string()
});

export type NewArticleSchema = z.infer<typeof NewArticleSchema>;
