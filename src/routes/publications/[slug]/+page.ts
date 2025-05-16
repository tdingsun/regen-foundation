import { getPublicationBySlug } from '$lib/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({params}) => {
    const content = await getPublicationBySlug(params.slug);
    return { content }
}