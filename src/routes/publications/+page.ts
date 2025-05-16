import { getAllPublications } from '$lib/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const publications = await getAllPublications();
    return { publications }
}