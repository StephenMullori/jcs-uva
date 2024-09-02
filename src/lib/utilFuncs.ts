import type { Slug } from '@sanity/types';

export const createURL = (type: string, slug: Slug): string => {
	return `/${type}/${slug.current}`;
};
