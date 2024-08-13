import { createClient, type ClientConfig } from '@sanity/client';

const config: ClientConfig = {
	projectId: '4w1vy3os',
	dataset: 'production',
	useCdn: true, // set to `false` to bypass the edge cache
	apiVersion: '2024-08-12', // use current date (YYYY-MM-DD) to target the latest API version
	perspective: 'published'
};
export const client = createClient(config);
