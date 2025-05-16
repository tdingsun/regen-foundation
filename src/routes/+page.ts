import { getHomePage } from '$lib/sanity';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
    const homePage = await getHomePage();
    return { homePage }
}