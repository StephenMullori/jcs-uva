import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import { client } from './client';
// import groq from 'groq';

// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const querryAllSlugs = async (): Promise<Slug[]> => {
	const slugs: Slug[] = await client.fetch('*[_type=="article"]{slug}');
	return slugs;
};

export const queryArticleFromSlug = async (urlParam: string): Promise<Article[]> => {
	const querry =
		'*[_type=="article"&&slug.current==$urlParam]{title, publishedAt, body, bannerImage }';
	const params = { urlParam };
	const articles: Article[] = await client.fetch(querry, params);
	return articles;
};

export interface Article {
	title: string;
	publishedAt: Date;
	body: PortableTextBlock[];
	bannerImage: ImageAsset;
}
export interface Post {
	_type: 'post';
	_createdAt: string;
	title?: string;
	slug: Slug;
	excerpt?: string;
	mainImage?: ImageAsset;
	body: PortableTextBlock[];
}
