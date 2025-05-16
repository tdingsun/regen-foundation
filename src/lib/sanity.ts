/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from '@sanity/client';
import groq from 'groq';
import imageUrlBuilder from '@sanity/image-url';
import type { Image } from '@sanity/types';

import { PUBLIC_SANITY_DATASET, PUBLIC_SANITY_PROJECT_ID } from '$env/static/public';

if (!PUBLIC_SANITY_PROJECT_ID || !PUBLIC_SANITY_DATASET) {
	throw new Error('Did you forget to run sanity init --env?');
}

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	useCdn: false, // `false` if you want to ensure fresh data
	apiVersion: '2025-01-31' // date of setup
});

//url builder

const builder = imageUrlBuilder(client);

export function urlFor(source: Image) {
	return builder.image(source);
}

export const getThumbnailImg = (imgRef: Image) => {
	return urlFor(imgRef).width(600).format('webp').fit('max').url();
};

export const getImgUrl = (imgRef: Image) => {
	return urlFor(imgRef).width(1600).format('webp').fit('max').url();
};

export async function getSiteInfo(): Promise<any> {
    return await client.fetch(groq`{
        "siteInfo": *[_id=="siteInfo"][0]{
            ...,
            textOnlyPages[]{
                slug,
                title
            }
        },
        "siteMetadata": *[_id=="siteMetadata"][0],
        "sections": *[_id=="homePage"][0].sections[]{
            slug,
            title
        }
    }`)
}

export async function getTextOnlyPage(slug: string): Promise<any> {
    return await client.fetch(groq`
        *[_id=="siteInfo"][0].textOnlyPages[][slug.current == '${slug}'][0]
    `)
}

export async function getHomePage(): Promise<any> {
    return await client.fetch(groq`
        *[_id=="homePage"][0]
    `)
}

export async function getAllPublications(): Promise<any> {
    return await client.fetch(groq`
        *[_type=="publication"] | order(publishDate desc)
    `)
}

export async function getPublicationBySlug(slug: string): Promise<any> {
    return await client.fetch(groq`
        *[_type=="publication" && slug.current == "${slug}"][0]
    `)
}

