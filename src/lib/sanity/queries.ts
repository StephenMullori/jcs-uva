import type { PortableTextBlock } from '@portabletext/types';
import type { File, ImageAsset, Slug } from '@sanity/types';
import { client } from './client';
import type { Image } from '@sanity/types';
// import groq from 'groq';

// export const postQuery = groq`*[_type == "post" && slug.current == $slug][0]`;

// export const postsQuery = groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)`;

export const querryAllSlugs = async (): Promise<Slug[]> => {
	const slugs: Slug[] = await client.fetch('*[_type=="article"]{slug}');
	return slugs;
};

export const queryResearchFromSlug = async (urlParam: string): Promise<ResearchArticle[]> => {
	const querry = `*[_type=="research"&&slug.current==$urlParam]{
		title,
		publishedAt,
		categories[]->{
			title,
		},
		abstract,
		pdfFile{
			asset->{
				url
			},
		},
		authors[]->{
			name,
			slug,
		},
		editor->{
			name,
			slug,
			image
		},
	}`;
	const params = { urlParam };
	const articles: ResearchArticle[] = await client.fetch(querry, params);
	return articles;
};

export const queryNewsFromSlug = async (urlParam: string): Promise<NewsArticle[]> => {
	const querry = `*[_type=="news"&&slug.current==$urlParam]{
		title,
		publishedAt,
		body,
		categories[]->{
			title,
		},
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
	const articles: NewsArticle[] = await client.fetch(querry, params);
	return articles;
};

export const queryHomePage = async (): Promise<HomePageInfo> => {
	const querryNews = `*[_type=="news"]{
		title,
		bannerImage,
		blurb,
		_type,
		slug
	}`;
	const querryResearch = `*[_type=="research"]{
		title,
		bannerImage,
		blurb,
		_type,
		slug
	}`;
	const news: DisplayInfo[] = await client.fetch(querryNews);
	const research: DisplayInfo[] = await client.fetch(querryResearch);
	return { news, research };
};

export interface pdfFile {
	asset: {
		url: string;
	};
}

export interface HomePageInfo {
	news: DisplayInfo[];
	research: DisplayInfo[];
}

export interface DisplayInfo {
	title: string;
	BannerImage: Image;
	blurb: string;
	_type: string;
	slug: Slug;
}

export interface WriterBlurb {
	name: string;
	slug: Slug;
	image: Image | null;
}

export interface ResearchArticle {
	title: string;
	publishedAt: string;
	abstract: PortableTextBlock[];
	authors: WriterBlurb[] | null;
	editor: WriterBlurb | null;
	pdfFile: pdfFile;
}

export interface NewsArticle {
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
