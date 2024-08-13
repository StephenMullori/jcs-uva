import type { PortableTextBlock } from '@portabletext/types';
import type { ImageAsset, Slug } from '@sanity/types';
import { client } from './client';
import type { SanityImageCrop, SanityImageHotspot } from '@sanity/image-url/lib/types/types';
import type { Image } from '@sanity/types';
// import groq from 'groq';

// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const querryAllSlugs = async (): Promise<Slug[]> => {
	const slugs: Slug[] = await client.fetch('*[_type=="article"]{slug}');
	return slugs;
};

export const queryArticleFromSlug = async (urlParam: string): Promise<Article[]> => {
	const querry = `*[_type=="article"&&slug.current==$urlParam]{
		title,
		publishedAt,
		body,
		bannerImage,
		author->{
			name,
			slug,
			image
		},
		editor->{
			name,
			slug,
			image
		},
	}`;
	const params = { urlParam };
	const articles: Article[] = await client.fetch(querry, params);
	return articles;
};

export interface BannerImage {
	asset: ImageAsset;
	crop: SanityImageCrop;
	hotspot: SanityImageHotspot;
}

export interface WriterBlurb {
	name: string;
	slug: Slug;
	image: Image | null;
}

export interface Article {
	title: string;
	publishedAt: string;
	body: PortableTextBlock[];
	bannerImage: Image;
	author: WriterBlurb | null;
	editor: WriterBlurb | null;
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
